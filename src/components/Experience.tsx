import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faRocket } from '@fortawesome/free-solid-svg-icons';
import { ExperienceType } from '../assets/resume';
import { formatDuration, formatMonthYear } from '../lib/dates';

interface ExperienceProps {
  experience?: ExperienceType[];
}

function Job({ job }: { job: ExperienceType }): JSX.Element {
  const dateRange = `${formatMonthYear(job.startDate)} – ${formatMonthYear(job.endDate)}`;
  return (
    <article className='mycard experience-card__experience'>
      <header className='experience-card__experience--header'>
        {job.website ? (
          <a
            className='experience-card__experience--logo'
            rel='noopener noreferrer'
            target='_blank'
            href={job.website}
            aria-label={`${job.company} website`}
          >
            <img alt={`${job.company} logo`} src={job.logo} />
          </a>
        ) : (
          <img alt={`${job.company} logo`} src={job.logo} />
        )}
        <div>
          <h5>{job.position}</h5>
          <a rel='noopener noreferrer' target='_blank' href={job.website}>
            {job.company}
          </a>
          <p className='experience-card__experience--duration'>
            {dateRange} · {formatDuration(job.startDate, job.endDate)}
            {job.endDate === 'now' && (
              <span className='experience-card__experience--present'>
                <span className='experience-card__experience--present-dot' />
                Present
              </span>
            )}
          </p>
        </div>
      </header>
      {job.activities.length > 0 && (
        <div className='experience-card__experience--description'>
          <ul>
            {job.activities.map((activity, activityKey) => (
              <li key={activityKey}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function Experience({ experience = [] }: ExperienceProps): JSX.Element {
  const visible = experience.filter((job) => !job.hidden);
  const employment = visible.filter((job) => !job.venture);
  const ventures = visible.filter((job) => job.venture);

  return (
    <>
      <section className='mycard experience-card'>
        <div className='mycard__header'>
          <h2>
            <FontAwesomeIcon icon={faBriefcase} /> Experience
          </h2>
        </div>
        <div className='experience-card__slideshow'>
          {employment.map((job, key) => (
            <Job key={key} job={job} />
          ))}
        </div>
      </section>
      {ventures.length > 0 && (
        <section className='mycard experience-card'>
          <div className='mycard__header'>
            <h2>
              <FontAwesomeIcon icon={faRocket} /> Founder Ventures
            </h2>
          </div>
          <div className='experience-card__slideshow'>
            {ventures.map((job, key) => (
              <Job key={key} job={job} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
