import React from 'react'
import { MdLocalPhone, MdMail, MdPlace } from 'react-icons/md'
import { ContactStyle } from '../style/ContactSection.styles'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'
import TitleName from './TitleName'


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
                text='asifdhrubo.cse@gmail.com'
                />
                <ContactInfoItem 
                icon={<MdPlace />}
                text='Kallyanpur, Dhaka 1207'
                />
                 </div>
                <div className='right'>s
                <ContactForm />
                </div>
                </div>
            </div>
        </ContactStyle>
    )
}
