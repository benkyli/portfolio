import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // add IoClose styling here or something. So add a hover, move to right side. 

    const navbarMenu = (isOpen) => {
        if (isOpen) {
            return (
                <div class='navbarMenu'>
                    <div onClick={toggleMenu}><IoClose /></div>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#resume'>Resume</a>
                    <a href='#contact'>Contact</a>
                </div>
            )
        } 
    }
    
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
                <a class='menuToggle' onClick={toggleMenu}>{isOpen ? null : <IoMenu/>}</a>
            </nav>
            {navbarMenu(isOpen)}
        </div>
    )
}

