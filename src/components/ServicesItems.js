import React from 'react'
import ServicesItemStyle from '../style/ServicesItems.styles'

export default function ServicesItems({icon,title,descrip}) {
    return (
        <ServicesItemStyle>
        
            <div className='icon'>{icon}</div>
            <div className='title'>{title}</div>
            <div>
                <p>{descrip}</p>
            </div>
        </ServicesItemStyle>
    )
}
