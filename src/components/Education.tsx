import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { EducationType } from '../assets/resume';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education = [] }: EducationProps): JSX.Element {
  return (
    <section className='mycard education-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} /> Certifications
        </h2>
      </div>
      <div className='education-card__slideshow'>
        {education.map((item, key) => (
          <article key={key} className='mycard education-card__education'>
            <header className='experience-card__experience--header'>
              <img alt='company logo' src={item.logo} />
              <div>
                <h5>{item.degree}</h5>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href={item.website}
                >
                  {item.institution}
                </a>
                <p>
                  {item.startDate} - {item.endDate}
                </p>
              </div>
            </header>
          </article>
        ))}
      </div>
    </section>
  );
}
