import { ProjectData } from './data/projects.jsx';
import ProjectCard from './ProjectCard.jsx';
import ThesisModal from './ThesisModal.jsx'
import { useState } from 'react';

export default function Projects() {

    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    };

    const projects = ProjectData.map(project =>
        <ProjectCard key={project.id} {...project} openModal={openModal} />)

    return (
        <div id='projects' className='section'>
            <h2 className='heading'>Projects</h2>
            <div className='content-container gap-4 '>
                {projects}
            </div>
            {modal ? <ThesisModal /> : null}
        </div>
    )
}