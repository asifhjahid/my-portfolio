import React from 'react'
import ProgressBarStyle from '../style/ProgressBar.styles'

export default function ProgressBar({title,width,text}) {
    return (
        <ProgressBarStyle>
            <h4>{title}</h4>
            <div className='progressBar'>
                <p>{text}</p>
                <div className='progress'>
                    <span style={{width:width}}></span>
                </div>
            </div>
        </ProgressBarStyle>
    )
}
