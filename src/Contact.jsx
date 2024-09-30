import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from './ContactForm.jsx'

export default function Contact() {
    return (
        <div className='contact section'>
            <h2 className='heading'>Contact</h2>
            <ContactForm />
            <div className='socials'>
                <FaGithub />
                <FaLinkedin />
                <a href='mailto:benjaminli@hotmail.ca'>
                    <MdOutlineEmail />
                </a>
            </div>
        </div>
    )
}