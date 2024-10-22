import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactSocials() {
    return (
        <div className='socials flex flex-col gap-4 text-2xl'>
            <div className='social-field'>
                <IoLocationSharp /> <span>Markham, ON, CA</span>
            </div>
            <button onClick={() => openInNewTab('https://github.com/benkyli')}><FaGithub /></button>
            <button onClick={() => openInNewTab('https://www.linkedin.com/in/benjamin-li-73b622295')}><FaLinkedin /></button>
            <a href='mailto:benjaminli@hotmail.ca' className='social-field'>
                <MdOutlineEmail /> <p>benjaminli@hotmail.ca</p>
            </a>
            <div className='social-field'>
                <FaPhoneAlt />
                <span>number</span>
            </div>
        </div>
    )
}
