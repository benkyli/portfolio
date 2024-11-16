import { openInNewTab } from './utils/utils.js';
import PropTypes from 'prop-types';

export default function ProjectCard(props) {

    return (
        <span onClick={() => openInNewTab(props.link)} className='project-card relative'>
            <span className='flex justify-center text-8xl pb-4'>{props.image}</span>
            <p className='flex justify-center text-2xl'>{props.title}</p>
            <hr />
            <p className='p-1 pt-2 text-lg'>{props.description}</p>
            <ul className='flex justify-center gap-1 absolute bottom-0 pb-3'>
                {props.tools.map((tool, i) =>
                    <li className='border-2 rounded-full p-1 bg-neutral-500 flex justify-center items-center' key={i}>{tool}</li>)}
            </ul>
        </span>
    )
};

ProjectCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.element,
    description: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string),
};