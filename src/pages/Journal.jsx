import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

const Journal = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const files = import.meta.glob("../notes/*.md", {
        query: "?raw",
        import: "default",
      });

      const all = [];

      for (const path in files) {
        const raw = await files[path]();
        const { data } = matter(raw);
        const slug = path.split("/").pop().replace(".md", "");
        all.push({ ...data, slug });
      }

      all.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(all);
    };

    loadEntries();
  }, []);

  return (
    <section className="container-pro">
      <div className="py-10 md:py-16">
        <header className="mx-auto max-w-2xl">
          <p className="font-mono text-xs tracking-[0.28em] text-muted">
            /JOURNAL
          </p>

          <h1 className="mt-4 font-serif text-[34px] leading-[1.08] tracking-[-0.02em] text-text md:text-[44px]">
            Notes, small thoughts.
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            Short entries—mostly about building, learning, and taste.
          </p>
        </header>

        <div className="mt-10">
          {entries.length === 0 ? (
            <div className="card p-6">
              <p className="text-sm text-muted">No entries yet.</p>
            </div>
          ) : (
            <ul className="divide-y divide-border/70 rounded-[18px] border border-border/70 bg-surface">
              {entries.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    to={`/journal/${entry.slug}`}
                    className="group block px-6 py-5 transition-colors hover:bg-bg/60 focus-visible:outline-none"
                    aria-label={`Open entry: ${entry.title}`}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h2 className="font-serif text-[18px] leading-snug text-text/90 group-hover:text-text">
                        {entry.title}
                      </h2>

                      <time
                        className="font-mono text-[11px] tracking-[0.22em] text-muted"
                        dateTime={entry.date}
                      >
                        {entry.date}
                      </time>
                    </div>

                    {entry.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {entry.description}
                      </p>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journal;

