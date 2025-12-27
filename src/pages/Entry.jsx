import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const Entry = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState({ content: "", data: {} });
  const [status, setStatus] = useState("loading"); // loading | ready | missing

  useEffect(() => {
    const files = import.meta.glob("../notes/*.md", {
      query: "?raw",
      import: "default",
    });

    const matchKey = Object.keys(files).find((key) => key.endsWith(`${slug}.md`));

    if (!matchKey) {
      setStatus("missing");
      return;
    }

    files[matchKey]().then((raw) => {
      const parsed = matter(raw);
      setEntry({ content: parsed.content, data: parsed.data || {} });
      setStatus("ready");
    });
  }, [slug]);

  return (
    <section className="container-pro">
      <div className="py-10 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/journal"
            className="font-mono text-xs tracking-[0.22em] text-muted hover:text-text transition-colors"
          >
            ← BACK
          </Link>
        </div>

        {status === "missing" ? (
          <div className="card p-6">
            <p className="text-sm text-muted">Entry not found.</p>
          </div>
        ) : status === "loading" ? (
          <div className="card p-6">
            <p className="text-sm text-muted">Loading…</p>
          </div>
        ) : (
          <>
            <header className="mx-auto max-w-2xl">
              <h1 className="font-serif text-[38px] leading-[1.08] tracking-[-0.02em] text-text md:text-[52px]">
                {entry.data.title || "Untitled"}
              </h1>

              {entry.data.date ? (
                <time
                  className="mt-3 block font-mono text-xs tracking-[0.22em] text-muted"
                  dateTime={entry.data.date}
                >
                  {entry.data.date}
                </time>
              ) : null}
            </header>

            <article className="mt-10 card p-6 md:p-10">
              <div
                className="
                  prose max-w-none
                  prose-headings:font-serif prose-headings:text-text prose-headings:tracking-[-0.01em]
                  prose-p:text-muted prose-p:leading-relaxed
                  prose-strong:text-text
                  prose-a:text-text prose-a:underline prose-a:decoration-border prose-a:underline-offset-8 hover:prose-a:decoration-accent
                  prose-hr:border-border
                  prose-blockquote:border-border prose-blockquote:text-muted
                  prose-code:text-text prose-code:bg-bg prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                  prose-pre:bg-bg prose-pre:border prose-pre:border-border prose-pre:rounded-xl
                "
              >
                <ReactMarkdown>{entry.content}</ReactMarkdown>
              </div>
            </article>
          </>
        )}
      </div>
    </section>
  );
};

export default Entry;

