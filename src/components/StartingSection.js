import React from 'react'
import SectionImg from '../images/about2.jpg'
import SectionStyled from '../style/StartingSection.styles' 
import Button from './Button'


export default function StartingSection() {
    return (
        <SectionStyled>
            <div className='container'>
                    <div className='SectionImg'>
                        <img src={SectionImg} alt='' />
                    </div>
                    <div className='rightSection'>
                    <h1 className='heading'>
                        <span className='span_1'>Asif H Jahid</span>
                        <span className='span_2'> Web Application Developer</span>
                    </h1>
                
                    <div className='Info'>
                        Hello ! I am Asif. A Professional web developer. I love art and 
                        always try to show unique views to the audience through my design.
                    </div>
                    <div className='btn'>
                    <Button linkTo='/projects2' text='see my works' />
                   
                    </div>
                    </div>
            </div>

        </SectionStyled>
    )
}
