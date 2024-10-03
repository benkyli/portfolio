export default function ContactForm() {
    return (
        <form>
            <p>Contact Form</p>
            <div>
                <label for='name'>Full Name</label>
                <input type='text' placeholder='Enter your name' name='name' required />
            </div>
            <div>
                <label for='email'>Email</label>
                <input type='text' placeholder='Enter your email' name='email' required/>
            </div>
            <div>
                <label for='message'>Message</label>
                <textarea name='message' placeholder='Enter your message' cols='10' rows='2'></textarea>
            </div>
            <button type='sumbit'>Send Message</button>
        </form>
    )
}