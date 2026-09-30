import resume from './assets/resume';
import Profile from './components/Profile';
import Skills from './components/Skills';
import DownloadButton from './components/DownloadButton';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';
import Badges from './components/Badges';

export default function App(): JSX.Element {
  const { profile, skills, about, experience, projects, education, badges } = resume;

  return (
    <>
      <main className="main_container">
        <section className="profile_section">
          <Profile profile={profile} />
          <Badges badges={badges} />
          <Skills skills={skills} />
          <DownloadButton />
        </section>
        <section className="career_section">
          <About about={about} />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Education education={education} />
        </section>
      </main>
      <Footer />
    </>
  );
}
