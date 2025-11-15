import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { SkillsSectionNew } from "../components/skills-section-new";
import { ProjectsSectionNew } from "../components/projects-section-new";
import { ContactSectionNew } from "../components/contact-section-new";
import { Header } from "@/components/header";

export default async function HomePage() {
	return (
		<div className="min-h-screen">
			<title>Ozan - Full Stack Developer Portfolio</title>
			<Header />
			<HeroSection />
			<AboutSection />
			<ProjectsSectionNew />
			<SkillsSectionNew />
			<ContactSectionNew />

			{/* Footer */}
			<footer className="border-t px-4 py-8">
				<div className="mx-auto w-full max-w-7xl border-x px-8 md:px-16">
					<div className="text-muted-foreground text-center text-sm">
						<p>© 2024 Ozan. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
