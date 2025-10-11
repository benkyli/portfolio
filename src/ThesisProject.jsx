import { openInNewTab } from './utils/utils.js';

export default function ThesisProject(props) {

    const tools = props.tools.join(', ') 

    return (
        <div onClick={() => openInNewTab(props.link)} className='flex-1 border-2 p-2 rounded-xl bg-gray-400 cursor-pointer relative hover:bg-gray-600'>
            <h4 className='text-lg font-bold mb-1'>{props.title}</h4>
            <ul className='text-sm flex flex-wrap gap-1 pb-3'>{tools}</ul>
        </div>
    )
}