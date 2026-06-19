# /// script
# requires-python = ">=3.9"
# dependencies = [
#     "reportlab>=4.0",
#     "json5>=0.9",
# ]
# ///
"""
Generate a professional, text-only PDF resume from the website's data.

Source of truth : src/assets/resume.ts  (the same object the site renders)
Output          : src/assets/Jehiel_Martinez_Resume.pdf  (served by the Download button)

Run it with uv (no manual venv needed):

    uv run scripts/generate_resume_pdf.py

The script reads the `resume` object out of resume.ts, so the PDF always
reflects the current site content. Experience entries flagged `hidden: true`
are skipped, exactly like the web page.
"""

from __future__ import annotations

import re
import sys
import datetime
import xml.sax.saxutils as su
from pathlib import Path

import json5
from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_RIGHT, TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

# --------------------------------------------------------------------------- #
# Paths
# --------------------------------------------------------------------------- #
ROOT = Path(__file__).resolve().parent.parent
RESUME_TS = ROOT / "src" / "assets" / "resume.ts"
OUTPUT_PDF = ROOT / "src" / "assets" / "Jehiel_Martinez_Resume.pdf"

# Online-course providers we don't list under formal Education (kept off the
# resume to avoid clutter; the formal degree is what matters).
ONLINE_PROVIDERS = {"Platzi", "Udemy", "FreeCodeCamp"}

# Brand accent (matches the website's accent colour).
ACCENT = colors.HexColor("#3C3388")
INK = colors.HexColor("#1A1A1A")
MUTED = colors.HexColor("#555555")
LINK = colors.HexColor("#2A4B8D")

MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]


# --------------------------------------------------------------------------- #
# Parsing resume.ts
# --------------------------------------------------------------------------- #
def extract_resume_object(raw: str) -> str:
    """Return the `{ ... }` object literal assigned to `const resume`.

    Walks the source tracking string literals and line comments so braces
    inside strings/comments never confuse the brace matching.
    """
    start = raw.index("const resume")
    i = raw.index("{", raw.index("=", start))
    depth = 0
    in_str = None
    escape = False
    in_comment = False
    j = i
    while j < len(raw):
        c = raw[j]
        if in_comment:
            if c == "\n":
                in_comment = False
        elif in_str:
            if escape:
                escape = False
            elif c == "\\":
                escape = True
            elif c == in_str:
                in_str = None
        else:
            if c == "/" and j + 1 < len(raw) and raw[j + 1] == "/":
                in_comment = True
            elif c in "\"'":
                in_str = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return raw[i : j + 1]
        j += 1
    raise ValueError("Could not find the end of the resume object in resume.ts")


def parse_skill_groups(obj_src: str) -> list[tuple[str, list[str]]]:
    """Recover the `// Group` headers + skills from the skills array.

    json5 drops comments, so we read the skills block from the resume object
    source to keep the website's grouping (Languages / Frontend / Backend / ...).
    `obj_src` must be the resume object literal (not the whole file) so we don't
    match the `skills: string[]` field in the TypeScript interface.
    """
    raw = obj_src
    block_start = raw.index("[", raw.index("skills:"))
    # find matching close bracket
    depth = 0
    end = block_start
    for k in range(block_start, len(raw)):
        if raw[k] == "[":
            depth += 1
        elif raw[k] == "]":
            depth -= 1
            if depth == 0:
                end = k
                break
    block = raw[block_start + 1 : end]

    groups: list[tuple[str, list[str]]] = []
    current = "Skills"
    items: list[str] = []
    for line in block.splitlines():
        s = line.strip()
        if not s:
            continue
        if s.startswith("//"):
            if items:
                groups.append((current, items))
                items = []
            current = s.lstrip("/ ").strip()
            continue
        m = re.search(r"""['"]([^'"]+)['"]""", s)
        if m:
            items.append(m.group(1))
    if items:
        groups.append((current, items))
    return groups


def load_resume() -> tuple[dict, list[tuple[str, list[str]]]]:
    raw = RESUME_TS.read_text(encoding="utf-8")
    obj_src = extract_resume_object(raw)
    data = json5.loads(obj_src)
    skill_groups = parse_skill_groups(obj_src)
    return data, skill_groups


# --------------------------------------------------------------------------- #
# Text helpers
# --------------------------------------------------------------------------- #
def rich(text: str) -> str:
    """Escape XML, then convert markdown **bold** to reportlab <b> markup."""
    text = text.replace("\n", " ").strip()
    parts = text.split("**")
    out = []
    for idx, part in enumerate(parts):
        esc = su.escape(part)
        out.append(f"<b>{esc}</b>" if idx % 2 == 1 else esc)
    return "".join(out)


def fmt_date(value: str) -> str:
    value = value.strip()
    if value.lower() in {"now", "present", "today", ""}:
        return "Present"
    # Stored as D/M/YYYY
    m = re.match(r"(\d{1,2})/(\d{1,2})/(\d{4})", value)
    if not m:
        return value
    _, month, year = m.groups()
    mi = max(1, min(12, int(month)))
    return f"{MONTHS[mi - 1]} {year}"


# --------------------------------------------------------------------------- #
# Styles
# --------------------------------------------------------------------------- #
def build_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()["Normal"]
    s: dict[str, ParagraphStyle] = {}

    s["name"] = ParagraphStyle(
        "name", parent=base, fontName="Helvetica-Bold", fontSize=22,
        leading=24, textColor=ACCENT, alignment=TA_LEFT, spaceAfter=2,
    )
    s["title"] = ParagraphStyle(
        "title", parent=base, fontName="Helvetica", fontSize=11.5,
        leading=14, textColor=MUTED, alignment=TA_LEFT, spaceAfter=4,
    )
    s["contact"] = ParagraphStyle(
        "contact", parent=base, fontName="Helvetica", fontSize=9,
        leading=13.5, textColor=INK, alignment=TA_LEFT,
    )
    s["section"] = ParagraphStyle(
        "section", parent=base, fontName="Helvetica-Bold", fontSize=10.5,
        leading=12, textColor=ACCENT, spaceBefore=10, spaceAfter=3,
        tracking=1,
    )
    s["summary"] = ParagraphStyle(
        "summary", parent=base, fontName="Helvetica", fontSize=9.3,
        leading=12.6, textColor=INK, alignment=TA_JUSTIFY, spaceAfter=4,
    )
    s["skillgroup"] = ParagraphStyle(
        "skillgroup", parent=base, fontName="Helvetica", fontSize=9.3,
        leading=13, textColor=INK, spaceAfter=2,
    )
    s["role"] = ParagraphStyle(
        "role", parent=base, fontName="Helvetica-Bold", fontSize=10.3,
        leading=12.5, textColor=INK,
    )
    s["company"] = ParagraphStyle(
        "company", parent=base, fontName="Helvetica-Oblique", fontSize=9.3,
        leading=12, textColor=ACCENT,
    )
    s["dates"] = ParagraphStyle(
        "dates", parent=base, fontName="Helvetica", fontSize=8.7,
        leading=12.5, textColor=MUTED, alignment=TA_RIGHT,
    )
    s["bullet"] = ParagraphStyle(
        "bullet", parent=base, fontName="Helvetica", fontSize=9.1,
        leading=12.3, textColor=INK, leftIndent=12, bulletIndent=2,
        spaceAfter=1.5,
    )
    s["edu"] = ParagraphStyle(
        "edu", parent=base, fontName="Helvetica", fontSize=9.3,
        leading=12.5, textColor=INK, spaceAfter=1,
    )
    return s


# --------------------------------------------------------------------------- #
# Flowable builders
# --------------------------------------------------------------------------- #
def section_header(title: str, styles) -> list:
    return [
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(
            width="100%", thickness=0.8, color=ACCENT,
            spaceBefore=0, spaceAfter=4, lineCap="round",
        ),
    ]


def contact_line(profile: dict, styles) -> Paragraph:
    """Two grouped lines: identity/contact, then social profiles.

    Keeping the long profile URLs on their own line avoids reportlab breaking a
    handle mid-word when everything is crammed onto a single overflowing row.
    """
    def link(url: str, label: str) -> str:
        safe = su.escape(label).replace(" ", "&nbsp;")
        return f'<a href="{url}"><font color="#2A4B8D">{safe}</font></a>'

    line1 = []
    if profile.get("location"):
        line1.append(su.escape(profile["location"]).replace(" ", "&nbsp;"))
    if profile.get("email"):
        line1.append(link("mailto:" + profile["email"], profile["email"]))
    if profile.get("website"):
        web = profile["website"]
        disp = re.sub(r"^https?://(www\.)?", "", web).rstrip("/")
        line1.append(link(web, disp))

    line2 = []
    if profile.get("github"):
        u = profile["github"]
        line2.append(link(f"https://github.com/{u}", f"github.com/{u}"))
    if profile.get("linkedin"):
        u = profile["linkedin"]
        line2.append(link(f"https://linkedin.com/in/{u}", f"linkedin.com/in/{u}"))

    sep = '<font color="#9A9A9A">&nbsp;&nbsp;·&nbsp;&nbsp;</font>'
    html = sep.join(line1)
    if line2:
        html += "<br/>" + sep.join(line2)
    return Paragraph(html, styles["contact"])


def experience_block(job: dict, styles, content_width: float) -> list:
    left = Paragraph(
        f'{su.escape(job["position"])}<br/>'
        f'<font color="#3C3388"><i>{su.escape(job["company"])}</i></font>',
        styles["role"],
    )
    date_range = f'{fmt_date(job["startDate"])} – {fmt_date(job["endDate"])}'
    right = Paragraph(date_range, styles["dates"])

    header = Table(
        [[left, right]],
        colWidths=[content_width * 0.74, content_width * 0.26],
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))

    flow = [header]
    for activity in job.get("activities", []):
        flow.append(Paragraph(rich(activity), styles["bullet"], bulletText="•"))
    flow.append(Spacer(1, 5))
    return flow


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def build_pdf(data: dict, skill_groups, styles) -> None:
    doc = SimpleDocTemplate(
        str(OUTPUT_PDF),
        pagesize=letter,
        leftMargin=0.62 * inch,
        rightMargin=0.62 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.5 * inch,
        title="Jehiel Martinez - Resume",
        author=data["profile"]["name"],
        subject=data["profile"].get("label", ""),
    )
    content_width = doc.width
    story: list = []

    profile = data["profile"]

    # ---- Header ----
    story.append(Paragraph(su.escape(profile["name"]), styles["name"]))
    if profile.get("label"):
        story.append(Paragraph(su.escape(profile["label"]), styles["title"]))
    story.append(Spacer(1, 3))
    story.append(contact_line(profile, styles))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.1, color=ACCENT,
                            spaceBefore=0, spaceAfter=2))

    # ---- Summary ----
    if data.get("about"):
        story += section_header("Summary", styles)
        for para in data["about"]:
            story.append(Paragraph(rich(para), styles["summary"]))

    # ---- Skills ----
    if skill_groups:
        story += section_header("Skills", styles)
        for group, items in skill_groups:
            if not items:
                continue
            story.append(Paragraph(
                f"<b>{su.escape(group)}:</b>&nbsp; " + ", ".join(su.escape(i) for i in items),
                styles["skillgroup"],
            ))

    # ---- Experience ----
    visible = [j for j in data.get("experience", []) if not j.get("hidden")]
    if visible:
        story += section_header("Experience", styles)
        for job in visible:
            story += experience_block(job, styles, content_width)

    # ---- Certifications (the website's Badges) ----
    badges = data.get("badges", [])
    if badges:
        story += section_header("Certifications", styles)
        names = " · ".join(su.escape(b["name"]) for b in badges)
        story.append(Paragraph(names, styles["edu"]))

    # ---- Education (formal degree only) ----
    degrees = [e for e in data.get("education", [])
               if e.get("institution") not in ONLINE_PROVIDERS]
    if degrees:
        story += section_header("Education", styles)
        for e in degrees:
            yr = ""
            if e.get("endDate"):
                m = re.search(r"(\d{4})", e["endDate"])
                if m:
                    yr = m.group(1)
            line = f'<b>{su.escape(e["degree"])}</b> — {su.escape(e["institution"])}'
            if yr:
                line += f' <font color="#777777">({yr})</font>'
            story.append(Paragraph(line, styles["edu"]))

    doc.build(story)


def main() -> int:
    if not RESUME_TS.exists():
        print(f"error: {RESUME_TS} not found", file=sys.stderr)
        return 1
    data, skill_groups = load_resume()
    styles = build_styles()
    build_pdf(data, skill_groups, styles)
    size = OUTPUT_PDF.stat().st_size
    visible = sum(1 for j in data.get("experience", []) if not j.get("hidden"))
    stamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    print(f"Wrote {OUTPUT_PDF.relative_to(ROOT)} ({size:,} bytes) "
          f"with {visible} experience entries at {stamp}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
