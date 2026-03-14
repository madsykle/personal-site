import React from "react";

const Icon = ({ name }) => {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };

  switch (name) {
    case "github":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.1-3.37-1.1-.45-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06.8-.23 1.66-.35 2.51-.35.85 0 1.71.12 2.51.35 1.9-1.33 2.75-1.06 2.75-1.06.55 1.43.2 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.86-4.57 5.11.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9A4.7 4.7 0 0 1 16.5 21.2h-9A4.7 4.7 0 0 1 2.8 16.5v-9A4.7 4.7 0 0 1 7.5 2.8Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M17.2 6.9h.01"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "telegram":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M21 4.8 3.7 11.6c-1.2.47-1.19 1.12-.22 1.42l4.5 1.4 1.7 5.2c.2.56.1.78.67.78.44 0 .64-.2.9-.45l2.2-2.15 4.6 3.4c.85.46 1.46.22 1.67-.8L22 6c.3-1.23-.47-1.78-1-1.2Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "mail":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M5.5 7.5 12 12l6.5-4.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "discord":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M8.5 7.4c2.1-1 4.9-1 7 0M7.3 19.2c3 1.8 6.4 1.8 9.4 0M7.1 8.2c-1.3 2.2-1.8 4.7-1.6 7.3.1 1 1 2 2.1 2.2M16.9 8.2c1.3 2.2 1.8 4.7 1.6 7.3-.1 1-1 2-2.1 2.2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M9.5 14.2h.01M14.5 14.2h.01"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

const SocialLinks = ({ className = "" }) => {
  const links = [
    { label: "GitHub", icon: "github", href: "https://github.com/madsykle" },
    { label: "YouTube", icon: "youtube", href: "https://youtube.com/@thebyteatlas" },
    { label: "Instagram", icon: "instagram", href: "https://instagram.com/nichedonnie" },
    { label: "Telegram", icon: "telegram", href: "https://t.me/nesbeer" },
    { label: "Discord", icon: "discord", href: "https://discord.com/users/711145429110358048" },
    { label: "Email", icon: "mail", href: "mailto:asnesbeer3@gmail.com" },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((x) => (
        <a
          key={x.label}
          href={x.href}
          target={x.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={x.href.startsWith("mailto:") ? undefined : "noreferrer"}
          className="
            inline-flex items-center gap-2
            rounded-full border border-border/70 bg-surface
            px-3 py-2 text-xs text-text/75
            transition-colors hover:text-text hover:border-border
          "
          aria-label={x.label}
          title={x.label}
        >
          <span className="text-muted">{Icon({ name: x.icon })}</span>
          <span className="hidden sm:inline">{x.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
