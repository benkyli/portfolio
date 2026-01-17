import { ProjectData } from './data/projects.jsx';
import ProjectCard from './ProjectCard.jsx';
import ThesisSection from './ThesisSection.jsx'
import { useState } from 'react';

export default function Projects() {
    const gitHubLink = "https://github.com/benkyli";

    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    };

    const projects = ProjectData.map(project =>
        <ProjectCard key={project.id} {...project} openModal={openModal} />)

    return (
        <div id='projects' >
            <h2 className='heading'>Projects</h2>
            <div className='content-container'>
                <ThesisSection />
                <div className='content-container gap-4 '>
                    {projects}
                </div>
            </div>
            
        </div>
    )
}