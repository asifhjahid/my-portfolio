import React from 'react'
import TitleStyle from '../style/Title.styles'

export default function Title({title}) {
    return (
        <TitleStyle className='title'>
          
                <h1>{title}</h1>
            

        </TitleStyle>
    )
}
