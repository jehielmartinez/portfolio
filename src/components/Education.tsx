import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { EducationType } from '../assets/resume';
import { parseResumeDate } from '../lib/dates';

interface EducationProps {
  education?: EducationType[];
}

export default function Education({ education = [] }: EducationProps): JSX.Element {
  return (
    <section className='mycard education-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </h2>
      </div>
      <div className='education-card__list'>
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className='education-card__education'>
            <h5>{item.degree}</h5>
            <a rel='noopener noreferrer' target='_blank' href={item.website}>
              {item.institution}
            </a>
            <p>
              {parseResumeDate(item.startDate).getFullYear()} – {parseResumeDate(item.endDate).getFullYear()}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
