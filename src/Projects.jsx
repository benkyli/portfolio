import ProjectCard from './ProjectCard.jsx'

// might loop through cards here instead? Probably should do it here, rather than generate the cards prior
export default function Projects() {
    return(
        <div id='projects' className='section'>
            <h2 className='heading'>Projects</h2>
            <div className='project-card-container'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}