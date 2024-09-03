import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

interface AboutProps {
  about?: string[]; // Define the expected type for the 'about' prop
}

export default function About({ about = [] }: AboutProps): JSX.Element {
  return (
    <section className="mycard about-card">
      <div className="mycard__header">
        <h2><FontAwesomeIcon icon={faUserTie} /> About</h2>
      </div>
      <div className="about-card__content">
        <ReactMarkdown>
          {about.join('\n')}
        </ReactMarkdown>
      </div>

    </section>
  );
}
