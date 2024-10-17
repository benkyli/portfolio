import { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className='navbar'>
                <a className='home' href='/'>BL</a>
                <div className={isOpen ? 'navbarItems active' : 'navbarItems'}>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
                <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                    <a className='menuToggle' onClick={toggleMenu}>{isOpen ? <IoClose /> : <IoMenu />}</a>
                </IconContext.Provider>
            </nav>
        </div>
    )
}

