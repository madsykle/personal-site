import React from "react";

const ProjectCard = ({ title, description, githubUrl, previewUrl }) => {
  return (
    <article className="card p-6 transition-colors duration-200 hover:border-border/90">
      <header className="mb-5">
        <h3 className="font-serif text-[20px] leading-snug text-text tracking-[-0.01em]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </header>

      <footer className="flex items-center gap-4 text-sm">
        {previewUrl ? (
          <a
            href={previewUrl}
            target="_blank"
            rel="noreferrer"
            className="text-text/80 hover:text-text transition-colors underline decoration-border underline-offset-8 hover:decoration-accent"
            aria-label={`Open preview for ${title}`}
          >
            View
          </a>
        ) : null}

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-text/60 hover:text-text transition-colors underline decoration-border underline-offset-8 hover:decoration-accent"
            aria-label={`Open source code for ${title}`}
          >
            Source
          </a>
        ) : null}
      </footer>
    </article>
  );
};

export default ProjectCard;

