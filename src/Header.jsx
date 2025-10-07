import { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMenu, IoClose } from 'react-icons/io5';
import bee from './images/beeWhite.png';

export default function Header({ bgColour }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className='navbar link-hover' style={{backgroundColor: bgColour}}>
                <a className='home' href='/'>
                    <img className='size-12' src={bee} />
                </a>
                <div className={isOpen ? 'navbarItems active' : 'navbarItems'}>
                    <a href='#about' onClick={toggleMenu}>About</a>
                    <a href='#projects' onClick={toggleMenu}>Projects</a>
                    <a href='#contact' onClick={toggleMenu}>Contact</a>
                </div>
                <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                    <a className='menuToggle' onClick={toggleMenu}>{isOpen ? <IoClose /> : <IoMenu />}</a>
                </IconContext.Provider>
            </nav>
        </div>
    )
}

