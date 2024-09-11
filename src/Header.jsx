import { useState } from 'react';
import { IoMenu, IoCloseOutline } from "react-icons/io5";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <nav class='navbar'>
                <a class='home' href='#index'>BL</a>
                <div class='navbarItems'>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#resume'>Resume</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div class='menuToggle'> 
                    <button onClick={toggleMenu}>{isOpen ? <IoCloseOutline /> : <IoMenu />}</button>
                </div>
            </nav>
            {navbarMenu(isOpen)}
        </div>
    )
}

function navbarMenu (isOpen) {
    if (isOpen) {
        return (
            <div class='navbarMenu'>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#resume'>Resume</a>
                <a href='#contact'>Contact</a>
            </div>
        )
    }
}
