import { AiOutlineExpandAlt } from "react-icons/ai";

export default function ProjectCard(props) {
    return (
        // loop through data file for inner content of the cards
        <span className='project-card'>
            <img src='' alt='project image identifier'></img>
            <hr  />
            <h3 className='project-title'>Title</h3> 
            < AiOutlineExpandAlt />
            <hr />
            <h4 className='project-description'>description</h4> 
            <hr />
            
            <span className='tool-tags flex gap-2'>
                <span>language</span>
                <span>framework</span>
                <span>api</span>
            </span>
        </span>
    )
    // include default props
    // include props types
}