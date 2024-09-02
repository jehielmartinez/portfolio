import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/Jehiel_Martinez_Resume.pdf';

export default function DownloadButton(): JSX.Element {
  return (
    <div className="download-section">
      <a href={resume} download="Jehiel Martinez CV">
        <button className="download-button">
          <FontAwesomeIcon icon={faDownload} style={{ marginRight: 10 }} />
          Download CV in PDF
        </button>
      </a>
    </div>
  );
}
