"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { Reveal } from "./reveal";
import { PROFILE } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section className="ag-section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="ag-section-inner" style={{ textAlign: "center" }}>
        <Reveal>
          <p className="ag-section-label" style={{ justifyContent: "center" }}>Ready for Liftoff</p>
          <h2 className="ag-section-title text-balance" style={{ maxWidth: 640, margin: "0 auto 24px" }}>
            {"Let's build something "}
            <span className="gradient-text">extraordinary</span>.
          </h2>
          <p className="ag-section-desc text-pretty" style={{ maxWidth: 480, margin: "0 auto 40px" }}>
            Open to full-time software engineering roles, freelance projects, and high-impact collaborations.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
              <Mail size={15} /> {PROFILE.email}
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Github size={15} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
