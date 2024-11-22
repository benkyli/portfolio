import { paragraphs } from './data/about.jsx';
import headshot from './images/headshot.jpg';

export default function About() {
    return (
        <div id='about' className='section'>
            <div className='heading'>About</div>
            <div className='content-container gap-24'>
                <img src={headshot} alt='headshot image' className='max-h-96 brightness-90'></img>
                <div className='max-w-screen-lg'>
                    {paragraphs.map((paragraph, index) =>
                        <p key={index} className='p-4 pt-0 text-3xl'>{paragraph}</p>
                    )}
                </div>
            </div>

        </div>
    )
}