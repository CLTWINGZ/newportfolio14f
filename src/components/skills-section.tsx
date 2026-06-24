"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";
import { SKILLS_BY_CATEGORY, iconAccentClass } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="ag-section">
      <div className="ag-section-inner">
        <Reveal className="ag-section-header">
          <p className="ag-section-label">Technical Arsenal</p>
          <h2 className="ag-section-title text-balance">The architecture within.</h2>
          <p className="ag-section-desc text-pretty">
            Core strengths across frontend, backend, databases, DevOps, networking, and cloud technologies.
          </p>
        </Reveal>

        <div className="bento-grid">
          {SKILLS_BY_CATEGORY.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.label} className="col-6" delay={(i % 2) * 0.05}>
                <div className="ag-card" style={{ height: "100%" }}>
                  <div className={`card-icon ${iconAccentClass[cat.accent]}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="card-title">{cat.label}</h3>
                  <div className="skill-grid">
                    {cat.items.map((skill) => (
                      <span key={skill} className="skill-pill">
                        <CheckCircle2 size={13} style={{ opacity: 0.6 }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
