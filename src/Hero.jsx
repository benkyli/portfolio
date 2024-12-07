import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { openInNewTab } from './utils/utils.js';

export default function Hero() {
    const name = 'Benjamin Li';
    const git_link = 'https://github.com/benkyli';
    const linkedin_link = 'https://www.linkedin.com/in/benjamin-li-73b622295';

    return (
        <div className='hero'>
            <div id='name'>{name}</div>
            <div className='flex gap-10 text-5xl link-hover'>
                <button onClick={() => openInNewTab({ git_link })}><FaGithub /></button>
                <button onClick={() => openInNewTab({ linkedin_link })}><FaLinkedin /></button>
            </div>
        </div>
    );
}
