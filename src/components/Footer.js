import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FooterStyle, LastPart } from '../style/Footer.styles'
import FooterList from './FooterList'


export default function Footer() {
    return (
        <div>
        <FooterStyle>
        <div className='container'>
            <div className='col_1'>
                <h1 className='title' >Asif H Jahid</h1>
                
                <p>A professional web developer.I Always make website that have unique designs and
                    also has a good performance rate.
                </p>
                
            </div>
            <div className='col_2'>
                <FooterList
                heading="Important Info"
                items={[
                    {
                        title:'Home',
                        path:'/',
                        type:'Link',
                    },
                    {
                        title:'About',
                        path:'/about2',
                        type:'Link',
                    },
                    {
                        title:'Projects',
                        path:'/projects2',
                        type:'Link',
                    },
                    {
                        title:'Contact',
                        path:'/contact2',
                        type:'Link',
                    },
                ]}
                
                />
            </div>
            <div className='col_3'>
                <FooterList 
                heading='Contact Info'
                items={[
                    {
                        title:'Kallyanpur,Dhaka,Bangladesh',
                        path:'',
                    },
                    {
                        title:'asifdhrubo.cse@gmail.com'
                    },
                    {
                        title:'+8801616882641'
                    }
                ]}
                />
            </div>
            <div className='col_4'>
                <h1 className='followtitle'>Follow Me</h1>
                 <a className='facebook' href="https://www.facebook.com/" target="_blank" rel="noreferrer" alt=''>
                <FaFacebook />
                </a>
                <a className='twitter' href="https://twitter.com/" target="_blank" rel="noreferrer" alt=''>
                <FaTwitter />
                </a>
                <a className='linkedIn' href="https://drive.google.com/drive/u/3/folders/1M3wTttfbdQM1l9NYyas5fNKh2edp-p8H" target="_blank" rel="noreferrer" alt=''>
                <FaLinkedinIn /> 
                </a>
                <a className='github' href="https://github.com/asifhjahid" target="_blank" rel="noreferrer" alt=''>
                <FaGithub />
                </a>
            </div>

            </div>
        </FooterStyle>

        <LastPart className='lastfooter'>
        <div className='container'>
            <p className='para'>All Rights Reserved By Asif H Jahid <span className='copyright'>&copy;</span> 2021-22</p>

        </div>

        </LastPart>
        
        </div>
    )
}
