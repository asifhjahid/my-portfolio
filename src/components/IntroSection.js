import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import SectionImg from '../images/intro2.png';
import SectionStyled from '../style/IntroSection.styles';
import Button from './Button';


export default function StartingSection() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{ 
            showCursor: true,
            backDelay:  1000,
            backSpeed: 50,
            strings: ['Web Developer', ' Web Designer','UI/UX Designer','Content Creator' ] })
        
    },[])
    return (
        <SectionStyled>
            <div className='introSection'>
                <div className='leftSection'>
                    <div className='SectionImg'>
                        <img src={SectionImg} alt='' />
                    </div>
                </div>
                    
                <div className='rightSection'>
                    <div className='info'>
                        <h2>Hi, I'm</h2>
                        <h1>Asif Hasan Jahid</h1>
                        <h3>Professional <span ref={textRef}></span> </h3>
                        
                        <div className='btn'>
                        <Button linkTo='/projects' text='Hire Me' />
                        </div>
                    </div>
                    </div>
            </div>

        </SectionStyled>
    )
}
