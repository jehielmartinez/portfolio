import { useState } from 'react';
import resumeData from './assets/resume';
import type { ProjectType, ResumeType } from './assets/resume';
import Profile from './components/Profile';
import Skills from './components/Skills';
import DownloadButton from './components/DownloadButton';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import './App.css';

export default function App(): JSX.Element {
  const [resume] = useState<ResumeType>(resumeData);
  const [show, setShow] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // const openModal = (project: ProjectType): void => {
  //   setShow(true);
  //   setSelectedProject(project);
  // };

  const closeModal = (): void => {
    setShow(false);
    setSelectedProject(null);
  };

  const renderProjectModal = (): JSX.Element | null => {
    if (show && selectedProject) {
      return <ProjectModal closeModal={closeModal} project={selectedProject} />;
    }
    return null;
  };

  const { profile, skills, about, experience } = resume;

  return (
    <>
      <main className="main_container">
        {renderProjectModal()}
        <section className="profile_section">
          <Profile profile={profile} />
          <Skills skills={skills} />
          {/* <Twitter /> */}
          <DownloadButton />
        </section>

        <section className="career_section">
          <About about={about} />
          {/* <Projects projects={projects} openModal={openModal} /> */}
          {/* <Education education={education} /> */}
          <Experience experience={experience} />
        </section>
      </main>
      <Footer />
    </>
  );
}
