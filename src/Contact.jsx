import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from './ContactForm.jsx'

export default function Contact() {
    const openInNewTab  = (url) => {
        const newTab = window.open(url, '_blank',  'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }
// maybe move the socials to a separate component
    return (
        <div id='contact' className='section'>
            <h2 className='heading'>Contact</h2>
            <div className='content-container justify-center gap-16'>
                <div className='socials flex flex-col gap-4 text-2xl'>
                    <span>Location</span>
                    <button onClick={() => openInNewTab('https://github.com/benkyli')}><FaGithub /></button>
                    <button onClick={() => openInNewTab('https://www.linkedin.com/in/benjamin-li-73b622295')}><FaLinkedin /></button> 
                    <a href='mailto:benjaminli@hotmail.ca' className='flex items-center'>
                        <MdOutlineEmail /> <p>benjaminli@hotmail.ca</p>
                    </a>
                    <span>phone</span>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}