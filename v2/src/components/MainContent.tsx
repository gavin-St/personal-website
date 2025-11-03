"use client";
import VideoHero from "./VideoHero";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

export default function MainContent() {
  return (
    <div className="pl-32 lg:pl-64">
      <VideoHero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}


