import { openInNewTab } from './utils/utils.js';

export default function ThesisProject(props) {

    const tools = props.tools.join(', ') 

    return (
        <div onClick={() => openInNewTab(props.link)} id='thesis-card'>
            <h4 className='text-lg font-bold mb-1'>{props.title}</h4>
            <ul className='text-sm flex flex-wrap gap-1 pb-3'>{tools}</ul>
        </div>
    )
}