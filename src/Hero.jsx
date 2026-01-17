import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { openInNewTab } from './utils/utils.js';

export default function Hero({ scrollProgress }) {
    const name = 'Benjamin Li';
    const git_link = 'https://github.com/benkyli';
    const linkedin_link = 'https://www.linkedin.com/in/benjamin-li-73b622295';

    const heroOpacity = Math.max(0.17, 1 - scrollProgress);

    return (
     
            <div className='hero' style={{opacity: heroOpacity}}>
                <div id='name'>{name}</div>
                <div className='flex gap-10 text-5xl link-hover'>
                    <button onClick={() => openInNewTab(git_link)}><FaGithub /></button>
                    <button onClick={() => openInNewTab(linkedin_link)}><FaLinkedin /></button>
                </div>
            </div>
       
    );
}

