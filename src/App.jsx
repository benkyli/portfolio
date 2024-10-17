import Header from './Header.jsx';
import Hero from './Hero.jsx'
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx'
import './css/index.css';
import './css/fonts.css';

export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}