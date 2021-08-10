import React from 'react'
import TitleName from './TitleName'
import ContactInfoItem from './ContactInfoItem'
import { MdLocalPhone, MdMail, MdPlace } from 'react-icons/md'
import ContactForm from './ContactForm'
import { ContactStyle } from '../Style/ContactSection.styles'


export default function ContactSection() {
    return (
        <ContactStyle>
            <div className='container'>
                <TitleName title="Contact" />
                <div className='contactSectionWrap'>
                <div className='left'>
                <ContactInfoItem 
                icon={<MdLocalPhone />}
                text='+8801616882641'
                />
                <ContactInfoItem 
                icon={<MdMail />}
                text='asifdiu44@gmail.com'
                />
                <ContactInfoItem 
                icon={<MdPlace />}
                text='Kallyanpur, Dhaka'
                />
                 </div>
                <div className='right'>
                <ContactForm />
                </div>
                </div>
            </div>
        </ContactStyle>
    )
}
