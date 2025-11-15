import { HeroSection } from "../components/hero-section";
import { SkillsSection } from "../components/skills-section";
import { ProjectsSection } from "../components/projects-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { Header } from "@/components/header";

export default async function HomePage() {
    return (
        <div className="min-h-screen">
            <title>Portfolio | Full Stack Developer</title>
            <Header />
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export const getConfig = async () => {
    return {
        render: "static",
    } as const;
};
