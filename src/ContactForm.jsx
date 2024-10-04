export default function ContactForm() {
    return (
        <form className='contact-form'>
            <p>Contact Form</p>
            <div className='flex flex-col'>
                <label for='name'>Full Name</label>
                <input type='text' placeholder='Enter your name' name='name' required />
            </div>
            <div className='flex flex-col'>
                <label for='email'>Email</label>
                <input type='text' placeholder='Enter your email' name='email' required/>
            </div>
            <div className='flex flex-col'>
                <label for='message'>Message</label>
                <textarea name='message' placeholder='Enter your message' cols='10' rows='2'></textarea>
            </div>
            <button type='submit'>Send Message</button>
        </form>
    )
}