import { ThesisProjects } from './data/thesisProjects'
import ProjectCard from './ProjectCard.jsx';

export default function ThesisModal() {
    return (
        <div id='thesis-modal' className='flex absolute'>
            {/* these should show on state click*/}
            {ThesisProjects.map(project =>
                <ProjectCard key={project.id} {...project} />
            )}
        </div>
    )
    // steps likely needed for modal. 
    // 1) add href to modal id instead of page. Perhaps make that a separate page
    // 2) Add state for modal? 
}