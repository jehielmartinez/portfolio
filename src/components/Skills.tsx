import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { SkillGroupType } from '../assets/resume';

interface SkillsProps {
  skills?: SkillGroupType[];
}

export default function Skills({ skills = [] }: SkillsProps): JSX.Element {
  return (
    <section className="mycard skills-card">
      <div className="mycard__header">
        <h2>
          <FontAwesomeIcon icon={faCode} /> Skills
        </h2>
      </div>
      <div className="skills-card__groups">
        {skills.map((group) => (
          <div className="skills-card__group" key={group.name}>
            <h4 className="skills-card__group--name">{group.name}</h4>
            <div className="skills-card__skills">
              {group.items.map((skill) => (
                <div className="skills-card__skills--element" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
