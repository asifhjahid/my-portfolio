import React from 'react'
import { ProjectBtnStyle,ProjectsBtnStyle } from '../style/Button.styles'

export default function ProjectButton({button,filter}) {
    return (
        <ProjectsBtnStyle>
        {
            button.map((btn, index) =>{
                return <ProjectBtnStyle key={index} onClick={() => filter(btn)}>
                    {btn}
                </ProjectBtnStyle>
            })
        }
    </ProjectsBtnStyle>
    )
}


