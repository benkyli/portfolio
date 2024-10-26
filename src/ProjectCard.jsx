import { AiOutlineExpandAlt } from "react-icons/ai";
import propTypes from 'prop-types';

export default function ProjectCard({ project }) {


    return (
        <span className='project-card'>
            <img src={project.image} alt='project image identifier'></img>
            <hr />
            <h3 className='project-title'>{project.title}</h3>
            <AiOutlineExpandAlt />
            <hr />
            <h4 className='project-description'>{project.description}</h4>
            <hr />
            <span className='tool-tags flex gap-2'>
                <ul>
                    {project.tools.map(tool => <li>{tool}</li>)}
                </ul>
            </span>
        </span>
    )
}
