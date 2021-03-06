import React from 'react'
import {Link} from 'react-router-dom'
import { ButtonStyled } from '../style/Button.styles'

export default function Button({text,linkTo}) {
    
    return (
        <ButtonStyled>
            <Link className='btn' to={linkTo}>{text}</Link>
        </ButtonStyled>
    )
}
        
        
        

        
