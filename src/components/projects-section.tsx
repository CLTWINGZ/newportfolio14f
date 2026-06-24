"use client";

import { useEffect, useState } from "react";
import { ExternalLink, ArrowUpRight, Monitor } from "lucide-react";
import { Reveal } from "./reveal";
import {
  PROJECTS, PROJECT_GALLERIES, HOTEL_VIDEO, iconAccentClass, type Project,
} from "@/lib/portfolio-data";

function FeaturedMockup({ project }: { project: Project }) {
  const images = PROJECT_GALLERIES[project.id] ?? [];
  const [idx, setIdx] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const isHotel = project.id === "hotel-cms";

  useEffect(() => {
    if (images.length <= 1 || showVideo) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length, showVideo]);

  return (
    <div className="mockup-box">
      <div className="browser-chrome">
        <span className="chrome-dot" style={{ background: "#ff5d73" }} />
        <span className="chrome-dot" style={{ background: "#ffce4a" }} />
        <span className="chrome-dot" style={{ background: "#2ce6a8" }} />
      </div>
      <div className="mockup-inner">
        {isHotel && showVideo ? (
          <iframe
            src={HOTEL_VIDEO}
            width="100%"
            height="100%"
            allow="autoplay"
            title={project.title}
            style={{ border: "none", position: "absolute", inset: 0 }}
          />
        ) : (
          <>
            {images.map((src, i) => (
              <div
                key={src}
                className="mockup-slide"
                style={{ opacity: idx === i ? 1 : 0, backgroundImage: `url(${src})` }}
              />
            ))}
            {images.length === 0 && (
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", opacity: 0.15 }}>
                <Monitor size={72} strokeWidth={0.75} color="var(--primary)" />
              </div>
            )}
            {isHotel && (
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 5, background: "rgba(0,0,0,0.25)", backdropFilter: "blur(2px)" }}>
                <button onClick={() => setShowVideo(true)} className="btn btn-primary play-btn">
                  ▶ Play Demo
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="ag-section">
      <div className="ag-section-inner">
        <Reveal className="ag-section-header">
          <p className="ag-section-label">Solutions Portfolio</p>
          <h2 className="ag-section-title text-balance">Engineered for impact.</h2>
          <p className="ag-section-desc text-pretty">
            Real-world systems built for production — from aviation infrastructure to AI-powered applications.
          </p>
        </Reveal>
      </div>

      <div className="bento-grid" style={{ paddingBottom: 64 }}>
        {featured.map((p, i) => (
          <Reveal key={p.id} className="col-12" delay={i * 0.04}>
            <div className="ag-card-featured">
              <div className="featured-project-grid">
                <div>
                  <span className="card-eyebrow" style={{ color: "var(--primary)" }}>★ {p.eyebrow}</span>
                  <h3 className="card-title-lg">{p.title}</h3>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
                    {p.subtitle}
                  </p>
                  <p className="card-desc" style={{ fontSize: 15.5, lineHeight: 1.7 }}>{p.desc}</p>
                  <div className="tag-row">
                    {p.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                    <a href={p.link || "https://github.com/CLTWINGZ"} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      <ExternalLink size={13} /> View Project
                    </a>
                  </div>
                </div>
                <FeaturedMockup project={p} />
              </div>
            </div>
          </Reveal>
        ))}

        {others.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.id} className="col-4" delay={(i % 3) * 0.05}>
              <div className="ag-card" style={{ height: "100%" }}>
                <div className={`card-icon ${iconAccentClass[p.accent]}`}>
                  <Icon size={22} />
                </div>
                <span className="card-eyebrow">{p.eyebrow}</span>
                <h3 className="card-title">{p.title}</h3>
                <p style={{ fontSize: 12, fontWeight: 600, color: `var(--accent-${p.accent})`, marginBottom: 10, letterSpacing: "0.03em" }}>
                  {p.subtitle}
                </p>
                <p className="card-desc">{p.desc}</p>
                <div className="tag-row">
                  {p.tags.slice(0, 3).map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <a href={p.link || "https://github.com/CLTWINGZ"} target="_blank" rel="noreferrer" className="card-link">
                  View Project <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
