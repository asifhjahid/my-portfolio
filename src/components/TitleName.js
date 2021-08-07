import React from 'react'
import TitleStyle from '../Style/Title.styles'

export default function Title({title}) {
    return (
        <TitleStyle className='title'>
          
                <h1>{title}</h1>
            

        </TitleStyle>
    )
}
