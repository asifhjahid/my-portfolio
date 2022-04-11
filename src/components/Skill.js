import React from 'react'
import SkillStyled from '../style/Skill.styles'
import ProgressBar from './ProgressBar'
import TitleName from './TitleName'

export default function Skill() {
    return (
        <SkillStyled>
            <TitleName title='My Skills' />
            <div className='skills'>
                <ProgressBar
                  title={'HTML'}
                  width={'90%'}
                  text= {'90%'}
                />
                <ProgressBar
                  title={'CSS'}
                  width={'80%'}
                  text= {'80%'}
                />
                <ProgressBar
                  title={'Bootstrap'}
                  width={'70%'}
                  text= {'70%'}
                />
                <ProgressBar
                  title={'JavaScript'}
                  width={'75%'}
                  text= {'75%'}
                />
                <ProgressBar
                  title={'ReactJS'}
                  width={'80%'}
                  text= {'80%'}
                />
                <ProgressBar
                  title={'NodeJS'}
                  width={'70%'}
                  text= {'65%'}
                />
                <ProgressBar
                  title={'ExpressJS'}
                  width={'80%'}
                  text= {'80%'}
                />
                <ProgressBar
                  title={'MongoDB'}
                  width={'85%'}
                  text= {'85%'}
                />
                <ProgressBar
                  title={'Python'}
                  width={'50%'}
                  text= {'50%'}
                />
                <ProgressBar
                  title={'C'}
                  width={'70%'}
                  text= {'70%'}
                />
            </div>
        </SkillStyled>
    )
}
