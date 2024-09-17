import Header from './Header.jsx';
import Introduction from './Introduction.jsx'
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact  from './Contact.jsx';
import './styles.css';

export default function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}