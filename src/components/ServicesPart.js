import React from 'react'
import TitleName from './TitleName'
import {MdDesktopWindows,MdCode,MdPhonelinkSetup} from 'react-icons/md'
import ServicesItems from './ServicesItems'
import ServicesStyle from '../Style/ServicesPart.styles'



export default function ServicesPart() {
    return (
        <ServicesStyle className='container'>
            <div className='ServiceContainer'>
                <TitleName title='Services' />
                
                <div className='LineOne'>
                <ServicesItems
                icon={<MdCode />}
                title='Web Design'
                descrip='I do UI/UX design for the website that helps website to get a unique look'
                />
                <ServicesItems
                icon={<MdDesktopWindows />}
                title='Web Development'
                descrip='I also develop the website.I create high performance website with blazing fast speed'
                />
                <ServicesItems
                icon={<MdPhonelinkSetup />}
                title='App Development'
                descrip='I also develop the website.I create high performance website with blazing fast speed'
                />
                </div>
            
                
            </div>
        </ServicesStyle>
    )
}
