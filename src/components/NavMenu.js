import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import NavStyle from '../style/NavMenu.styles'



export default function NavMenu() {
    const [showNav,setShowNav]= useState(false)
    return (
        <NavStyle>
           <div>
                <h1>Asif H Jahid</h1>
            </div>
                
            <div className='NavMobileOpen'
             onClick={()=>setShowNav(!showNav)}
            >
                <MdMenu />
            </div>
            
            <ul className={!showNav ? 'NavList hideItem':' NavList'}>
                <div className='NavMobileClose'
                onClick={()=>setShowNav(!showNav)}
                
                >
                    <MdClose />
                </div>
                <li className='hideItem'
                onClick={()=>setShowNav(!showNav)}>
                    <NavLink to='/' exact>Home</NavLink>
                </li>
                <li className='hideItem'
                onClick={()=>setShowNav(!showNav)}>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className='hideItem'
                onClick={()=>setShowNav(!showNav)}>
                    <NavLink to='/projects'>Projects</NavLink>
                </li>
                <li className='hideItem'
                onClick={()=>setShowNav(!showNav)}>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </NavStyle>
    )
}
