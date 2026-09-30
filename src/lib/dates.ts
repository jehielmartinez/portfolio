/** Parse the D/M/YYYY dates used in resume.ts. 'now' (or empty) means today. */
export function parseResumeDate(value: string): Date {
  const v = value.trim().toLowerCase();
  if (v === '' || v === 'now' || v === 'present') return new Date();
  const [day, month, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
}

/** Human duration between two resume dates, e.g. "1 year 3 months". */
export function formatDuration(startDate: string, endDate: string): string {
  const start = parseResumeDate(startDate);
  const end = parseResumeDate(endDate);
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() >= start.getDate()) months += 1; // count the partial month, as LinkedIn does
  months = Math.max(months, 1);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  if (rest > 0) parts.push(`${rest} ${rest === 1 ? 'month' : 'months'}`);
  return parts.join(' ');
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Jun 2025" or "Present". */
export function formatMonthYear(value: string): string {
  const v = value.trim().toLowerCase();
  if (v === '' || v === 'now' || v === 'present') return 'Present';
  const d = parseResumeDate(value);
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
