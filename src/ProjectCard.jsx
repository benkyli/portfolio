export default function ProjectCard() {
    return (
        // might want to make a data file that has each project's information. 
        // Then loop through those here
        <span className='project-card'>
            <img src='' alt='project image identifier'></img>
            <h3 className='project-title'>Title</h3> 
            <h4 className='project-description'>description</h4> 
            <span>
                <h5>insert languages, frameworks, apis, other tools</h5>
            </span>
        </span>
    )
}