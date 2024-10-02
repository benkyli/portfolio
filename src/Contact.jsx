import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from './ContactForm.jsx'

export default function Contact() {
    const openInNewTab  = (url) => {
        const newTab = window.open(url, '_blank',  'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }
    
    return (
        <div className='contact section'>
            <h2 className='heading'>Contact</h2>
            <ContactForm />
            <div className='socials'>
                <button onClick={() => openInNewTab('https://github.com/benkyli')}><FaGithub /></button>
                <button onClick={() => openInNewTab('https://www.linkedin.com/in/benjamin-li-73b622295')}><FaLinkedin /></button> 
                <a href='mailto:benjaminli@hotmail.ca'>
                    <MdOutlineEmail />
                </a>
            </div>
        </div>
    )
}