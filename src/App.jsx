import React from "react";
import { motion } from "framer-motion";

import SocialLinks from "./components/SocialLinks.jsx";

const App = () => {
  return (
    <section id="about" className="container-pro">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className="py-10 md:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.28em] text-muted">
              WNABE’ELIOT
            </p>

            <h1 className="mt-4 font-serif text-[42px] leading-[1.05] tracking-[-0.02em] text-text md:text-[56px]">
              Nesbeer.
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-border/70 bg-surface/60 px-3 py-1 font-mono text-[11px] tracking-[0.22em] text-muted">
                [ fsociety ]
              </span>

              <span className="text-sm text-muted">
                16 · building things on a phone
              </span>
            </div>

            <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-muted md:text-[16px]">
              <p>
                i love coding, cinema, design — all the stuff no one around me
                gets.
              </p>
              <p>
                not trying to be a dev god. just making things i’d wanna use.
              </p>
              <p className="text-text/75">
                react · next.js · tailwind
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card p-6">
              <p className="text-sm leading-relaxed text-text/80">
                <span className="font-mono text-xs tracking-[0.22em] text-muted">
                  NOTE
                </span>
                <br />
                <span className="mt-3 block italic text-muted">
                  ‘i don’t exist in real life.’
                </span>
              </p>
            </div>
          </div>
          <SocialLinks className="mt-10 justify-center lg:col-span-12" />
        </div>
      </motion.div>
    </section>
  );
};

export default App;

