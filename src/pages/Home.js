import React from 'react'
import AboutSection from '../components/AboutSection'
import ClientReviewSection from '../components/ClientReviewSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import StartingSection from '../components/StartingSection'





export default function Home() {
    return (
        <div>
            <StartingSection />
            <AboutSection />
            <ServicesSection /> 
            <ProjectsSection />
            <ClientReviewSection />
        </div>
    )
}
