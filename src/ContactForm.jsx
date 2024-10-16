import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export default function ContactForm() {

    // get methods from useForm and set default values
    const { register, 
            control, 
            handleSubmit, 
            formState: { errors, isSubmitSuccessful },
            reset 
        } = useForm({
            defaultValues: {
                contactname: '',
                contactemail: '',
                contactmessage: '',
            }
        });

    // submission request and reset
    const onSubmit = (data) => {
        console.log('send data to actual thing')
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div>
        <form className='contact-form' onSubmit={handleSubmit(onSubmit)} onSuccess={() => {alert('Message sent')}} noValidate>
            <p>Contact Form</p>
            <div className='form-section'>
                <label for='contactname'>Full Name</label>
                <input id='contactname' type='text' placeholder='Enter your name' 
                    {...register('contactname', { 
                        required: {
                            value: true,
                            message: 'Name required'
                        },
                    })} 
                />
                <p className='error'>{errors.contactname?.message}</p>
            </div>
            <div className='form-section'>
                <label for='contactemail'>Email</label>
                <input id='contactemail' type='email' placeholder='Enter your email'
                    {...register('contactemail', { 
                        required: {
                            value: true,
                            message: 'Email required'
                        }, 
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email format',
                        },
                    })} 
                />
                <p className='error'>{errors.contactemail?.message}</p>
            </div>
            <div className='form-section'>
                <label for='contactmessage'>Message</label>
                <textarea id='contactmessage' type='text' placeholder='Enter your message' cols='10' rows='2'
                    {...register('contactmessage', {
                        required: {
                            value: true,
                            message: 'Message cannot be empty'
                        }
                    })} 
                />
                <p className='error'>{errors.contactmessage?.message}</p>
            </div>
            <button type='submit'>Send Message</button>
        </form>
        <DevTool control={control}/>
        </div>
    )
}