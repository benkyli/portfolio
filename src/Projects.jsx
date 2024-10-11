import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
    // pass props into each project card
    return(
        <div id='projects' className='section'>
            <h2 className='heading'>Projects</h2>
            <div className='content-container gap-4 justify-center'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}