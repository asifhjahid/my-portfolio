import React from 'react'
import { ContactItemStyle } from '../Style/ContactSection.styles'


export default function ContactInfoItem({icon,text}) {
    return (
        <ContactItemStyle>
            <div className='icon'>{icon}</div>
            <div className='info'>
                <p className='para'>{text}</p>
            </div>
        </ContactItemStyle>
    )
}
