import { useState } from 'react';
import { IconContext} from 'react-icons';
import { IoMenu, IoClose } from "react-icons/io5";



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav id='navbar'>
                <a id='home' href='#index'>BL</a>
                <div id='navbarItems' className={isOpen ? 'navbarItems active' : 'navbarItems'}>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#resume'>Resume</a>
                    <a href='#contact'>Contact</a>
                </div>
                <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                    <a id='menuToggle' onClick={toggleMenu}>{isOpen ? <IoClose /> : <IoMenu/>}</a>
                </IconContext.Provider>
            </nav>
        </div>
    )
}

