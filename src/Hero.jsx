import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <div className='hero'>
            <div>Benjamin Li</div>
            <a href=''>Resume</a>
            <div className='icons'>
                <a href=''><FaGithub /></a>
                <a href=''><FaLinkedin /></a>
            </div>
        </div>
    );
}
