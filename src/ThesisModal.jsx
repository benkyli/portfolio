import { ThesisProjects } from './data/thesisProjects'
import ProjectCard from './ProjectCard.jsx';
import ThesisCard from './ThesisCard.jsx'

const thesisInfo = ThesisProjects[0];
const projects = ThesisProjects.splice(1)

export default function ThesisModal() {
    return (
        <div>
            {/* apparently you can set the href of a modal */}
            <ProjectCard {...thesisInfo} />
            {/* these should show on state click*/}
            {projects.map(project =>
                <ThesisCard key={project.id} {...project} />
            )}
        </div>
    )
    // steps likely needed for modal. 
    // 1) add href to modal id instead of page. Perhaps make that a separate page
    // 2) Add state for modal? 
}