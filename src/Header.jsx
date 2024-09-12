import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navbarMenu = (isOpen) => {
        if (isOpen) {
            return (
                <div class='navbarMenu'>
                    <a onClick={toggleMenu}><IoClose /></a>
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
                <a class='menuToggle' onClick={toggleMenu}><IoMenu/></a>
            </nav>
            {navbarMenu(isOpen)}
        </div>
    )
}

