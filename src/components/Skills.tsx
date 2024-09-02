import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

interface SkillsProps {
  skills?: string[]; // Define the type for the skills prop, which is an optional array of strings
}

export default function Skills({ skills = [] }: SkillsProps): JSX.Element {
  return (
    <section className="mycard skills-card">
      <div className="mycard__header">
        <h2>
          <FontAwesomeIcon icon={faCode} /> Skills
        </h2>
      </div>
      <div className="skills-card__skills">
        {skills.map((skill, index) => (
          <div className="skills-card__skills--element" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
