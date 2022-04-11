import React from 'react'
import AboutSection from '../components/AboutSection'
import ClientReviewSection from '../components/ClientReviewSection'
import IntroSection from '../components/IntroSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'





export default function Home() {
    return (
        <div>
            <IntroSection />
            <AboutSection />
            <ServicesSection /> 
            <ProjectsSection />
            <ClientReviewSection />
        </div>
    )
}
