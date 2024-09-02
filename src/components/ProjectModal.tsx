import { ProjectType } from "../assets/resume";

interface ProjectModalProps {
  project: ProjectType;
  closeModal: () => void;
}

export default function ProjectModal({ project, closeModal }: ProjectModalProps): JSX.Element {
  return (
    <section onClick={closeModal} className='project-modal'>
      <article className='mycard project-modal__content'>
        <div className='project-modal__content--image'>
          <img
            src={project.image}
            alt='project'
          />
        </div>
        <div className='project-modal__content--description'>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          {project.link ? (
            <a rel='noopener noreferrer' target='_blank' href={project.link}>
              Try it LIVE!
            </a>
          ) : null}
        </div>
      </article>
    </section>
  );
}
