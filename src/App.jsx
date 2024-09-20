import Header from './Header.jsx';
import Hero from './Hero.jsx'
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact  from './Contact.jsx';
import './css/styles.css';
import './css/tailwind.css';

export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}