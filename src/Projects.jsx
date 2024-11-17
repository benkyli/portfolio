import { ProjectData } from './data/projects.jsx';
import ProjectCard from './ProjectCard.jsx';
import ThesisModal from './ThesisModal.jsx'

export default function Projects() {

    const projects = ProjectData.map(project =>
        <ProjectCard key={project.id} {...project} />)

    return (
        <div id='projects' className='section'>
            <h2 className='heading'>Projects</h2>
            <div className='content-container gap-4 '>
                {projects}
                <ThesisModal />
            </div>
        </div>
    )
}