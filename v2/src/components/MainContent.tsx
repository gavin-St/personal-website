"use client";
import VideoHero from "./VideoHero";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import MediaSection from "./MediaSection";

export default function MainContent() {
  return (
    <div className="pl-32 lg:pl-52">
      <VideoHero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <MediaSection />
    </div>
  );
}


