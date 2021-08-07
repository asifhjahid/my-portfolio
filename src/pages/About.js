import React from 'react'
import Button from '../components/Button'
import AboutImg from '../Images/zero.jpg'
import TitleName from '../components/TitleName'
import { AboutStyle } from '../Style/About.styles'


export default function About() {
    return (
      
        <AboutStyle className='container'>
            <TitleName title='About' />
            <div className='topSide'>
                <div className='leftSide'>
                    <p className='subTitle'>
                     Hello, I am  <span>Asif H Jahid</span>
                     </p>
                     <h2 className='aboutTitle'>A Web Developer</h2>
                     <div className='myInfo'>
                        <p className='para'>
                          I am from Jashore, Khulna, Bangladesh. A place of beauty and nature.
                          Since my childhood, i love art and design. I always try to design stuff with
                          my unique point of view. I also love to create things can be usefull to others.

                          <br/>
                          <br/>  
                          I started coding since I was in high school. Coding is also an art of me.
                          I love it and now I have the opportunity to design along with coding. I find it
                          really interesting and I enjoyed the process a lot.
                          <br/>
                          <br/> 
                          My vision is to make the world a better place. Now almost everything is becoming better than ever. 
                          It is time for us to create more good stuff that helps the world to become a better place.
                        </p>
                     </div>
                     <Button linkTo='#'text='Download CV'  />
                </div>
                <div className='rightSide'>
                    <img  src={AboutImg} alt=''/>
                </div>
            </div>
         
            
                
               
           
            
        </AboutStyle>
      
       
        
       
        
        
    )
}
