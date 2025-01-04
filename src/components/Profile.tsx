import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import {
  faDev,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { ProfileType } from '../assets/resume';

// Define the shape of the profile prop
interface ProfileProps {
  profile: ProfileType;
}

export default function Profile({ profile }: ProfileProps): JSX.Element {
  const {
    name,
    label,
    location,
    github,
    dev,
    email,
    linkedin,
    picture
  } = profile;

  return (
    <section className="mycard profile_card">
      <img
        alt="profile-pic"
        src={picture}
      />
      <div className="profile_card__info">
        <h1 className="profile_card__info--name">{name}</h1>
        <h2 className="profile_card__info--label">{label}</h2>
        <h3 className="profile_card__info--location">{location}</h3>
      </div>
      <div className="profile-card__social">
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              href={`https://github.com/${github}`}
              target="_blank"
            >
              <FontAwesomeIcon color="#000000" icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/in/${linkedin}/`}
              target="_blank"
            >
              <FontAwesomeIcon color="#0077B5" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href={`https://dev.to/${dev}`}
              target="_blank"
            >
              <FontAwesomeIcon color="#000000" icon={faDev} />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href={`mailto:${email}`}
              target="_blank"
            >
              <FontAwesomeIcon color="#C71610" icon={faEnvelopeOpenText} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
