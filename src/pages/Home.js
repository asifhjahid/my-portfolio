import React from 'react'
import AboutPart from '../components/AboutPart'
import ClientReviewSection from '../components/ClientReviewSection'
import ProjectsPart from '../components/ProjectsPart'
import ServicesPart from '../components/ServicesPart'
import StartingSection from '../components/StartingSection'





export default function Home() {
    return (
        <div>
            <StartingSection />
            <AboutPart />
            <ServicesPart /> 
            <ProjectsPart />
            <ClientReviewSection />
            
            
            
        </div>
    )
}
