import ContactForm from './ContactForm.jsx'
import ContactSocials from './ContactSocials.jsx'

export default function Contact() {
    return (
        <div id='contact' className='section link-hover'>
            <h2 className='heading'>Contact</h2>
            <div className='content-container justify-center gap-32'>
                <ContactSocials />
                <ContactForm />
            </div>
        </div>
    )
}