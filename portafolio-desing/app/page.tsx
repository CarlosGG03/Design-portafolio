import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import type { Education, Experience, Project, Skill } from "@/types";

const projects: Project[] = [
  { id: "1", slug: "orion-platform", title: "Orion Platform", summary: "Plataforma modular para gestionar operaciones, métricas y equipos desde un mismo espacio.", technologies: "Next.js, FastAPI, PostgreSQL", featured: true, github_url: "https://github.com/CarlosGG03", live_url: "#" },
  { id: "2", slug: "atlas-api", title: "Atlas API", summary: "API orientada a dominios con autenticación, documentación y una arquitectura lista para crecer.", technologies: ".NET, Docker, PostgreSQL", featured: false, github_url: "https://github.com/CarlosGG03" },
];

const skills: Skill[] = [
  { id: "1", name: "React / Next.js", category: "Frontend" }, { id: "2", name: "TypeScript", category: "Frontend" }, { id: "3", name: "Tailwind CSS", category: "Frontend" },
  { id: "4", name: "Python / FastAPI", category: "Backend" }, { id: "5", name: "C# / .NET", category: "Backend" }, { id: "6", name: "REST & OpenAPI", category: "Backend" },
  { id: "7", name: "PostgreSQL", category: "Datos" }, { id: "8", name: "Docker", category: "DevOps" }, { id: "9", name: "Clean Architecture", category: "Arquitectura" },
];

const experiences: Experience[] = [
  { id: "1", role: "Senior Full Stack Engineer", company: "Desarrollo de productos digitales", location: "Remoto", start_date: "2022", end_date: "", is_current: true, description: "Diseño soluciones escalables, acompaño decisiones técnicas y convierto problemas complejos en experiencias simples.", technologies: "Next.js, FastAPI, .NET, PostgreSQL" },
  { id: "2", role: "Software Developer", company: "Proyectos empresariales", location: "Colombia", start_date: "2020", end_date: "2022", is_current: false, description: "Construcción de APIs, interfaces y automatizaciones con foco en calidad, mantenibilidad y entrega continua.", technologies: "React, Python, Docker" },
];

const education: Education[] = [
  { id: "1", degree: "Ingeniería de Sistemas", institution: "Formación universitaria", start_year: "2016", end_year: "2021", description: "Bases sólidas en ingeniería de software, arquitectura y resolución de problemas." },
  { id: "2", degree: "Aprendizaje continuo", institution: "Especialización práctica", start_year: "2021", end_year: "Presente", description: "Profundización constante en sistemas distribuidos, cloud y diseño de producto." },
];

export default function Page() {
  return <div className="max-h-4-screen overflow-x-hidden bg-[#08090d] text-slate-100"><Navbar /><main><Hero /><div className="mx-auto flex max-w-6xl flex-col gap-32 px-4 pb-32 sm:px-6"><ProjectsSection projects={projects} /><SkillsSection skills={skills} /><ExperienceSection experiences={experiences} education={education} /><ContactSection /></div></main><Footer /></div>;
}
