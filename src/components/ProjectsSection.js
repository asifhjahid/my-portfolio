import React,{useState} from 'react'
import { MainLayout, InnerLayout} from '../style/Layout.styles'
import TitleName from './TitleName'
import Projects from '../assets/data/projects'
import ProjectItem from './ProjectItem'
import ProjectButton from './ProjectButton'



const allButtons = ['All',...new Set(Projects.map((item)=>item.category))]

export default function ProjectsPart() {
    const [itemList, setItemLists] = useState(Projects);
    const [button] = useState(allButtons)

    const filter = (button)=>{
        if(button === 'All'){
            setItemLists(Projects);
            return;
    }
    const filteredPrejects = Projects.filter(item => item.category === button);
        setItemLists(filteredPrejects);
}
    return (
        <MainLayout >
            <div className='container'>
            <TitleName title ='Projects' />
            <InnerLayout>
                <ProjectButton filter={filter} button={button} />
                <ProjectItem Items={itemList}/>
            </InnerLayout>
            </div>
        </MainLayout>
    )
}
