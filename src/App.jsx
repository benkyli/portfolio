import Header from './Header.jsx';
import Hero from './Hero.jsx'
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx'
import './css/index.css';
import './css/fonts.css';
import  {useState, useEffect} from 'react';

export default function App() {
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
  
    let scrollProgress = 1;
    const fadeEnd = window.innerHeight;
    if (scrollPosition < fadeEnd) {
        scrollProgress = scrollPosition / fadeEnd;
    }
 

    return (
            <div className='overflow-x-hidden'>
                <Header scrollProgress={scrollProgress} />
                <Hero scrollProgress={scrollProgress} />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
    )
}