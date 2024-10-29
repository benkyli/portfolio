import { AiOutlineExpandAlt } from "react-icons/ai";
import propTypes from 'prop-types';

export default function ProjectCard(props) {

    return (
        <span className='project-card relative'>
            <AiOutlineExpandAlt />
            <span className='flex justify-center text-8xl pb-4'>{props.image}</span>
            <p className='flex justify-center text-xl'>{props.title}</p>
            <hr />
            <p className='pt-1 pb-1'>{props.description}</p>
            <ul className='flex gap-1 absolute bottom-0 pb-3'>
                {props.tools.map((tool, i) =>
                    <li className='border-2 rounded-full p-1  bg-neutral-500' key={i}>{tool}</li>)}
            </ul>

        </span>
    )
}
