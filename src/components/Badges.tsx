import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BadgeType } from '../assets/resume';
import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate';

interface BadgesProps {
  badges?: BadgeType[];
}

export default function Badges({ badges = [] }: BadgesProps): JSX.Element {
  return (
    <section className="mycard skills-card">
      <div className="mycard__header">
        <h2>
          <FontAwesomeIcon icon={faCertificate} /> Certifications
        </h2>
      </div>
      <div className="skills-card__skills">
        {badges.map((badge, index) => (
          <a href={badge.link} target="_blank" rel="noreferrer" key={index}>
            <img src={badge.image} alt="badge" width={150} />
          </a>
        ))}
      </div>
    </section>
  );
}
