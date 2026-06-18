import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ExperienceType } from '../assets/resume';

interface ExperienceProps {
  experience?: ExperienceType[];
}

export default function Experience({ experience = [] }: ExperienceProps): JSX.Element {
  return (
    <section className='mycard experience-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </h2>
      </div>
      <div className='experience-card__slideshow'>
        {experience.map((job, key) => (
          <article key={key} className='mycard experience-card__experience'>
            <header className='experience-card__experience--header'>
              {job.website ? (
                <a
                  className='experience-card__experience--logo'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={job.website}
                  aria-label={`${job.company} website`}
                >
                  <img alt='company logo' src={job.logo} />
                </a>
              ) : (
                <img alt='company logo' src={job.logo} />
              )}
              <div>
                <h5>{job.position}</h5>
                <a rel='noopener noreferrer' target='_blank' href={job.website}>
                  {job.company}
                </a>
                <p className='experience-card__experience--duration'>
                  {job.duration}
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
        ))}
      </div>
    </section>
  );
}
