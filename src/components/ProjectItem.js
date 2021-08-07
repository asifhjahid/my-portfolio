import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'
import Itemstyle from '../Style/ProjectItem.styles'


export default function ProjectItem({Items}) {
    return (
        <Itemstyle >
            
            {
                Items.map((item)=>{
                    return (
                        <div className ='container'>
                        <div className='itemlist' key={item.id}>
                            <div className = 'content' >
                                 <div className='portfolio_img' >
                                    <img src={item.img} alt='' />
                                    <ul>
                                        <li >
                                            <a href={item.link1}>
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li >
                                            <a  href={item.link2}>
                                                <AiOutlineLink />
                                            </a>
                                        </li>
                                    </ul>
                               

                                
                            
                        </div>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                        </div>
                    </div>
                    </div>
                )})
                    }
                    
        </Itemstyle>
    )
}
