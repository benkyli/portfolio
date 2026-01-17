import { openInNewTab } from './utils/utils.js';
import PropTypes from 'prop-types';

export default function ProjectCard(props) {
    // github ending card
    if (props.id == -1) {
         return (
        <span onClick={() => openInNewTab(props.link)} className='project-card items-center justify-center'>
            <span className='text-8xl pb-4'>{props.image}</span>
            <p className='text-5xl font-bold'>{props.title}</p>
            <p className='p-1 pt-4 pb-3 text-lg'>{props.description}</p>
        </span>
        )
    }

    // normal project card
    return (
        <span onClick={() => openInNewTab(props.link)} className='project-card'>
            <span className='flex justify-center text-8xl pb-4'>{props.image}</span>
            <p className='flex justify-center text-2xl'>{props.title}</p>
            <hr />
            <p className='flex p-1 pt-2 pb-3 text-lg grow'>{props.description}</p>
            <ul className='flex flex-wrap gap-2 pb-3'>
                {props.tools.map((tool, i) =>
                    <li className='rounded-full px-2 py-1 bg-neutral-500 flex justify-center items-center' key={i}>{tool}</li>)}
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