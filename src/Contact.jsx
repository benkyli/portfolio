import ContactForm from './ContactForm.jsx'

export default function Contact() {
    return (
        <div id='contact'>
            <h2 className='heading'>Contact</h2>
            <div className='content-container justify-center gap-32'>
                <ContactForm />
            </div>
        </div>
    )
}