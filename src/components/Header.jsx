import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const navLinkBase =
  "text-sm text-muted transition-colors duration-200 hover:text-text focus-visible:outline-none";

const navLinkActive =
  "text-text underline decoration-accent underline-offset-8";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur">
      <div className="container-pro flex items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="font-mono text-xs tracking-[0.22em] text-text/85 hover:text-text transition-colors"
          aria-label="Go to home"
        >
          ~/NESBEER
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/works"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Archives
          </NavLink>

          <NavLink
            to="/journal"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Journal
          </NavLink>

          <ThemeToggle />

        </nav>
      </div>
    </header>
  );
};

export default Header;

