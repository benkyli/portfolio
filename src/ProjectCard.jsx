import { AiOutlineExpandAlt } from "react-icons/ai";
import propTypes from 'prop-types';

export default function ProjectCard(props) {

    return (
        <span className='project-card'>
            {props.image}
            <hr />
            <h3 className='project-title'>{props.title}</h3>
            <AiOutlineExpandAlt />
            <hr />
            <h4 className='project-description'>{props.description}</h4>
            <hr />
            <span className='tool-tags flex gap-2'>
                <ul>
                    {props.tools.map((tool, i) =>
                        <li key={i}>{tool}</li>)}
                </ul>
            </span>
        </span>
    )
}
