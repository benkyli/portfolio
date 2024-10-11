import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';



export default function ContactForm() {

    const { register, control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted', data)
    }

    // validation is tricky here. Decide if having rhf handle everything is necessary w/ noValidate. Might be excessive. 
    return (
        <div>
        <form className='contact-form' onSubmit={handleSubmit(onSubmit)}  noValidate>
            <p>Contact Form</p>
            <div className='flex flex-col'>
                <label for='name'>Full Name</label>
                <input type='text' {...register('name', { required: true })} placeholder='Enter your name'/>
            </div>
            <div className='flex flex-col'>
                <label for='email'>Email</label>
                <input type='email' {...register('email', { required: true })} placeholder='Enter your email'/>
            </div>
            <div className='flex flex-col'>
                <label for='message'>Message</label>
                <textarea type='text' {...register('message')} placeholder='Enter your message' cols='10' rows='2'></textarea>
            </div>
            <button type='submit'>Send Message</button>
        </form>
        <DevTool control={control}/>
        </div>
    )
}