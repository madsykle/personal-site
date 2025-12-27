import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Netflyer",
    description: "Simple streaming. No ads.",
    githubUrl: "https://github.com/unknnsb/netflyer",
    previewUrl: "https://netflyer.vercel.app",
  },
  {
    title: "dotfiles",
    description: "My Termux + proot dotfiles. Minimal.",
    githubUrl: "https://github.com/unknnsb/dotfiles",
    previewUrl: "https://github.com/unknnsb/dotfiles",
  },
  {
    title: "CaNo3",
    description: "A simple and minimal smoke grande store (client work).",
    githubUrl: "https://github.com/unknnsb/cano3",
    previewUrl: "https://cano3.vercel.app",
  },
];

const Works = () => {
  return (
    <section id="works" className="container-pro">
      <div className="py-10 md:py-16">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.28em] text-muted">
            /ARCHIVES
          </p>

          <h1 className="mt-4 font-serif text-[34px] leading-[1.08] tracking-[-0.02em] text-text md:text-[44px]">
            Selected work.
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            Small projects, experiments, and client work—built with restraint and
            shipped fast.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

