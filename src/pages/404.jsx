import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="container-pro"
    >
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.28em] text-muted">
            user@nes ~ /404
          </p>

          <h1 className="mt-4 font-serif text-[44px] leading-[1.05] tracking-[-0.02em] text-text md:text-[64px]">
            Page not found.
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            This path doesn’t exist. Head back home or open the archives.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-border/70 bg-surface px-5 py-2 text-sm text-text/90 transition-colors hover:border-border hover:text-text focus-visible:outline-none"
            >
              Go home
            </Link>

            <Link
              to="/works"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm text-muted underline decoration-border underline-offset-8 transition-colors hover:text-text hover:decoration-accent focus-visible:outline-none"
            >
              View archives
            </Link>
          </div>

          <div className="mt-10 card p-6 text-left">
            <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
              system.log
            </p>
            <pre className="mt-3 overflow-auto font-mono text-xs leading-relaxed text-text/70">
{`> 404
> path not found
> nothing was here`}
            </pre>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;

