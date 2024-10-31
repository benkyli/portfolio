import { paragraphs } from './data/about.jsx'

export default function About() {
    return (
        <div id='about' className='section'>
            <div className='heading'>About</div>
            <div className='content-container gap-16'>
                <img src='src/images/headshot.jpg' alt='headshot image' className='max-h-96 brightness-90'></img>
                <div className='max-w-screen-md'>
                    {paragraphs.map((paragraph, index) =>
                        <p key={index} className='p-2'>{paragraph}</p>
                    )}
                </div>
            </div>

        </div>
    )
}