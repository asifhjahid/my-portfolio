import React, { useState } from 'react'
import ContactFormStyle from '../style/ContactForm.styles'


export default function ContactForm() {
    const[name,setName] = useState('')
    const[email,setEmail]= useState('')
    const[message,setMessage] = useState('')
    return (
        <div>
            <ContactFormStyle >
                <div className='formGroup'>
                    <label htmlFor='name'> Your Name
                    <input  type='text' id='name' name='name' placeholder='Name' value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    />

                    </label>
                </div>
                <div className='formGroup'>
                    <label htmlFor='email'>Your Email
                    <input  type='email' id='email' name='email'placeholder='Email' value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    </label>
                </div>
                <div className='formGroup'>
                    <label htmlFor='message' >Your Message
                    <textarea  type='text' id='message' name='message' placeholder='Type Your Message' value={message} 
                    onChange={(e)=>setMessage(e.target.value)}
                    />

                    </label>
                </div>
                <button type='submit'>Send</button>
            </ContactFormStyle>
        </div>
    )
}
