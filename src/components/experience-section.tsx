"use client";

import { ExternalLink } from "lucide-react";
import { Reveal } from "./reveal";
import { EXPERIENCE, EDUCATION, PROFILE } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="ag-section"
      style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}
    >
      <div className="ag-section-inner">
        <div className="experience-grid">
          <Reveal>
            <div className="exp-sticky">
              <p className="ag-section-label">Career & Education</p>
              <h2 className="ag-section-title text-balance">Chronicle.</h2>
              <p className="ag-section-desc text-pretty" style={{ fontSize: 16 }}>
                Building aviation infrastructure and enterprise software. Currently a fresh graduate seeking high-impact engineering roles.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href={PROFILE.cv} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <ExternalLink size={13} /> Full CV
                </a>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Work */}
            <Reveal delay={0.05}>
              <div className="ag-card" style={{ padding: 36 }}>
                <p className="card-eyebrow" style={{ marginBottom: 24, color: "var(--primary)" }}>Work Experience</p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="timeline-meta">{EXPERIENCE.meta}</p>
                    <h3 className="timeline-title">{EXPERIENCE.title}</h3>
                    <p className="timeline-unit">{EXPERIENCE.unit}</p>
                    <p className="timeline-org">{EXPERIENCE.org}</p>
                    <div className="tag-row" style={{ marginBottom: 20, marginTop: 0 }}>
                      {EXPERIENCE.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                    <ul className="timeline-list">
                      {EXPERIENCE.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Education */}
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.title} delay={0.1 + i * 0.05}>
                <div className="ag-card">
                  {i === 0 && <p className="card-eyebrow" style={{ marginBottom: 24, color: "var(--primary)" }}>Education</p>}
                  <div className="timeline">
                    <div className="timeline-item" style={{ paddingBottom: 0 }}>
                      <div className="timeline-dot" style={{ background: `var(--accent-${ed.accent})`, boxShadow: `0 0 0 3px var(--accent-${ed.accent})33` }} />
                      <p className="timeline-meta" style={{ color: `var(--accent-${ed.accent})` }}>{ed.meta}</p>
                      <h3 className="timeline-title">{ed.title}</h3>
                      <p className="timeline-org" style={{ color: `var(--accent-${ed.accent})` }}>{ed.org}</p>
                      <p className="timeline-body">{ed.body}</p>
                      {ed.tags.length > 0 && (
                        <div className="tag-row" style={{ marginTop: 0 }}>
                          {ed.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
