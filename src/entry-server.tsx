import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import resume from './assets/resume';
import { formatMonthYear, parseResumeDate } from './lib/dates';

/** Server entry used by scripts/prerender.js to bake the page into static HTML at build time. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

const { profile, summary, about, skills, badges, experience, projects, education } = resume;
const visibleJobs = experience.filter((job) => !job.hidden);
const links = {
  github: `https://github.com/${profile.github}`,
  linkedin: `https://www.linkedin.com/in/${profile.linkedin}/`,
  dev: `https://dev.to/${profile.dev}`,
};

/** Plain-markdown résumé served as /llms.txt for LLMs and other non-JS readers. */
export function renderMarkdown(): string {
  const range = (start: string, end: string) => `${formatMonthYear(start)} – ${formatMonthYear(end)}`;
  const job = (j: (typeof visibleJobs)[number]) =>
    [
      `### ${j.position} — [${j.company}](${j.website})`,
      `_${range(j.startDate, j.endDate)}_`,
      '',
      ...j.activities.map((a) => `- ${a}`),
    ].join('\n');

  return [
    `# ${profile.name}`,
    '',
    `> ${profile.label}. ${summary}`,
    '',
    `- Location: ${profile.location}`,
    `- Email: ${profile.email}`,
    `- Website: ${profile.website}`,
    `- GitHub: ${links.github}`,
    `- LinkedIn: ${links.linkedin}`,
    `- DEV: ${links.dev}`,
    `- PDF résumé: ${profile.website}/resume.pdf`,
    '',
    '## About',
    '',
    about.map((p) => p.trim()).join('\n\n'),
    '',
    '## Skills',
    '',
    ...skills.map((g) => `- **${g.name}:** ${g.items.join(', ')}`),
    '',
    '## Experience',
    '',
    visibleJobs.filter((j) => !j.venture).map(job).join('\n\n'),
    '',
    '## Founder Ventures',
    '',
    visibleJobs.filter((j) => j.venture).map(job).join('\n\n'),
    '',
    '## Selected Projects',
    '',
    ...projects.map((p) => `- [${p.name}](${p.link}) (${p.year}): ${p.description} _${p.tags.join(', ')}_`),
    '',
    '## Certifications',
    '',
    ...badges.map((b) => `- [${b.name}](${b.link})`),
    '',
    '## Education',
    '',
    ...education.map(
      (e) =>
        `- ${e.degree}, [${e.institution}](${e.website}) (${parseResumeDate(e.startDate).getFullYear()} – ${parseResumeDate(e.endDate).getFullYear()})`,
    ),
    '',
  ].join('\n');
}

/** schema.org Person, embedded as JSON-LD in the page head. */
export function renderJsonLd(): string {
  const current = visibleJobs.find((j) => j.endDate === 'now' && !j.venture);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.label,
    description: summary,
    url: profile.website,
    email: `mailto:${profile.email}`,
    image: new URL(profile.picture, `${profile.website}/`).href,
    address: profile.location,
    sameAs: Object.values(links),
    knowsAbout: skills.flatMap((g) => g.items),
    worksFor: current && { '@type': 'Organization', name: current.company, url: current.website },
    alumniOf: education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution, url: e.website })),
    hasCredential: badges.map((b) => ({ '@type': 'EducationalOccupationalCredential', name: b.name, url: b.link })),
  };
  // Escape '<' so résumé text can never close the <script> tag.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const meta = {
  title: `${profile.name} — ${profile.label}`,
  description: summary,
  url: profile.website,
  image: new URL(profile.picture, `${profile.website}/`).href,
};
