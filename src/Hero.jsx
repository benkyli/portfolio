import { Parallax } from 'react-scroll-parallax';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { openInNewTab } from './utils/utils.js';
import  {useState, useEffect} from 'react';

export default function Hero() {
    const name = 'Benjamin Li';
    const git_link = 'https://github.com/benkyli';
    const linkedin_link = 'https://www.linkedin.com/in/benjamin-li-73b622295';

     const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
       
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let heroOpacity = 1;
    const fadeEnd = window.innerHeight;
    if (scrollPosition <= fadeEnd) {
        const scrollProgress = scrollPosition / fadeEnd;
        heroOpacity = Math.max(0.2, 1 - scrollProgress);
    }
    else {
        heroOpacity = 0.2;
    }
  
    return (
     
            <div className='hero' style={{opacity: heroOpacity}}>
                <div id='name'>{name}</div>
                <div className='flex gap-10 text-5xl link-hover'>
                    <button onClick={() => openInNewTab({ git_link })}><FaGithub /></button>
                    <button onClick={() => openInNewTab({ linkedin_link })}><FaLinkedin /></button>
                </div>
            </div>
       
    );
}

