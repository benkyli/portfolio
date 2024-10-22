import { useState } from 'react';
import { useForm } from 'react-hook-form';

const access_key = 'INSERT ACCESS KEY';

export default function ContactForm() {

    // get methods from useForm and set default values
    const { register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        getValues,
        watch,
        reset
    } = useForm({
        defaultValues: {
            contact_name: '',
            contact_email: '',
            contact_message: '',
        }
    });

    // submission request and reset
    const [isSuccess, setIsSuccess] = useState(false);
    const [Message, setMessage] = useState("");

    const onSubmit = async (data, e) => {
        // check honeypot
        if (getValues('password')) { return };

        // attempt to send message through api
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data, null, 2),
        })
            .then(async (response) => {
                let json = await response.json();
                console.log(json);
                if (json.success) {
                    setIsSuccess(true);
                    setMessage(json.message);
                    e.target.reset();
                    reset();
                } else {
                    setIsSuccess(false);
                    setMessage(json.message);
                }
            })
            .catch((error) => {
                setIsSuccess(false);
                setMessage("Client Error. Please try again");
            });
    };

    return (
        <div>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className='text-xl'>Contact Form</p>
                <input
                    type="hidden"
                    value={access_key}
                    {...register("access_key")}
                />
                <div className='form-section'>
                    <label htmlFor='contact_name'>Full Name</label>
                    <input id='contact_name' type='text' placeholder='Enter your name'
                        {...register('contact_name', {
                            required: {
                                value: true,
                                message: 'Name required'
                            },
                        })}
                    />
                    <p className='error'>{errors.contactname?.message}</p>
                </div>
                <div className='form-section'>
                    <label htmlFor='contact_email'>Email</label>
                    <input id='contact_email' type='email' placeholder='Enter your email'
                        {...register('contact_email', {
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
                    <p className='error'>{errors.contact_email?.message}</p>
                </div>
                <div className='form-section'>
                    <label htmlFor='contact_message'>Message</label>
                    <textarea id='contact_message' type='text' placeholder='Enter your message' cols='10' rows='2'
                        {...register('contact_message', {
                            required: {
                                value: true,
                                message: 'Message cannot be empty'
                            }
                        })}
                    />
                    <p className='error'>{errors.contact_message?.message}</p>
                </div>
                {/* spam honeypot trap; not an actual password */}
                <input type='text' id='botcheck' className={'hidden'} tabIndex='-1' autoComplete='false'
                    {...register('botcheck')}
                />
                <button type='submit' disabled={watch('password')}>Send Message</button>
                {/* submission success messages */}
                {isSubmitSuccessful && isSuccess && (<p className='text-green-500'>{Message}</p>)}
                {isSubmitSuccessful && !isSuccess && (<p className='text-red-600'>{Message}</p>)}
            </form>
        </div>
    )
}