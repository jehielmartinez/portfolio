import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { ProjectType } from '../assets/resume';

interface ProjectsProps {
  projects: ProjectType[];
  openModal: (project: ProjectType) => void;
}

export default function Projects({ projects = [], openModal }: ProjectsProps): JSX.Element {
  return (
    <section className='mycard projects-card'>
      <div className='mycard__header'>
        <h2>
          <FontAwesomeIcon icon={faMicrochip} /> Projects
        </h2>
      </div>
      <div className='projects-card__slideshow'>
        {projects.map((project, key) => (
          <article
            onClick={() => openModal(project)}
            key={key}
            className='mycard projects-card__project'
          >
            <img
              src={project.image}
              alt={project.name}
            />
            <h3>{project.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
