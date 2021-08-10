import React from 'react'
import Button from './Button'
import TitleName from './TitleName'
import AboutImg from '../images/about5.jpg'
import AboutStyle from '../style/AboutSection.styles'

export default function AboutPart() {
    return (
        <AboutStyle>
            <div className='container'>
                <div className='leftSection'>
                    <TitleName title='About Me' />
                    <p>
                        I am a website designer and developer. I create professional websites.
                        I love to design and make new web experiences for the people.
                    </p>
                    <div className='aboutBtn'>
                        <Button linkTo='/projects2' text='Explore Me'/>
                        <Button linkTo='/about2' text='Read More...' />
                    </div>
                </div>
                <div className='rightSection'>
                <img src={AboutImg} alt='' />
                </div>
            </div>
        </AboutStyle>
    )
}
