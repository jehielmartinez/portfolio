import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ProjectType } from '../assets/resume';

interface ProjectsProps {
  projects?: ProjectType[];
}

export default function Projects({ projects = [] }: ProjectsProps): JSX.Element {
  return (
    <section className='mycard projects-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faMicrochip} /> Selected Projects
        </h2>
      </div>
      <div className='projects-card__list'>
        {projects.map((project) => (
          <article key={project.name} className='projects-card__project'>
            <header className='projects-card__project--header'>
              <h3>
                {project.link ? (
                  <a rel='noopener noreferrer' target='_blank' href={project.link}>
                    {project.name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' />
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className='projects-card__project--year'>{project.year}</span>
            </header>
            <p>{project.description}</p>
            <div className='projects-card__project--tags'>
              {project.tags.map((tag) => (
                <span key={tag} className='skills-card__skills--element'>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
