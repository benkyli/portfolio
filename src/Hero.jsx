import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { openInNewTab } from './utils/utils.js';

export default function Hero() {

    return (
        <div className='hero'>
            <div id='name'>Benjamin Li</div>
            <button className='resume-box'>
                <FaFileDownload />
                <span>Resume</span>
            </button>
            <div className='flex gap-6 text-5xl link-hover'>
                <button onClick={() => openInNewTab('https://github.com/benkyli')}><FaGithub /></button>
                <button onClick={() => openInNewTab('https://www.linkedin.com/in/benjamin-li-73b622295')}><FaLinkedin /></button>
            </div>
        </div>
    );
}
