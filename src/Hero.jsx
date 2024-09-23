import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Hero() {
    const openInNewTab  = (url) => {
        const newTab = window.open(url, '_blank',  'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }

    return (
        <div className='hero'>
            <div id='name'>Benjamin Li</div>
            <button className='resume-box'>
                <FaFileDownload />
                <div>Resume</div>
            </button>
            <div className='flex gap-6 text-4xl'>
                <button onClick={() => openInNewTab('https://github.com/benkyli')}><FaGithub /></button>
                <button onClick={() => openInNewTab('https://www.linkedin.com/in/benjamin-li-73b622295')}><FaLinkedin /></button> 
            </div>
        </div>
    );
}
