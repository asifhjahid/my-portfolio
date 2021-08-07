import React from 'react'
import { Link } from 'react-router-dom'
import FooterItemstyle from '../Style/FooterList.styles'

export default function FooterList({items,heading}) {
    return (
        <FooterItemstyle>
            <h2 className='titleName'>{heading}</h2>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>
                        {item.type==='Link' ? (
                            <Link to={item.path}>{item.title}</Link>
                        ) :(
                            <a href={item.path} target='-blank' rel='noreferrer'>
                                {item.title}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </FooterItemstyle>
    )
}