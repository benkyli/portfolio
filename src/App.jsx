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
  
    let scrollOpacity = 1;
    const colourLightest = 55;
    let rgb = colourLightest;
    const fadeEnd = window.innerHeight;
    if (scrollPosition < fadeEnd) {
        const scrollProgress = scrollPosition / fadeEnd;
        scrollOpacity = Math.max(0.17, 1 - scrollProgress);
        rgb = Math.max(10, colourLightest - colourLightest * scrollProgress)
    }
    else {
        scrollOpacity = 0.17;
        rgb = 10;
    }

    return (
            <div className='overflow-x-hidden'>
                <Header bgColour={`rgb(${rgb}, ${rgb}, ${rgb})`}/>
                <Hero heroOpacity={scrollOpacity}/>
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
    )
}