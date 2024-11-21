import { ThesisProjects } from './data/thesisProjects'
import ProjectCard from './ProjectCard.jsx';

export default function ThesisModal() {
    return (
        <div id='thesis-modal'>
            {ThesisProjects.map(project =>
                <ProjectCard key={project.id} {...project} />
            )}
        </div>
    )
}