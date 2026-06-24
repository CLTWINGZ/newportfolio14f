"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { FIVERR_GIGS } from "@/lib/portfolio-data";

export function ServicesSection() {
  return (
    <section id="services" className="ag-section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="ag-section-inner">
        <Reveal className="ag-section-header">
          <p className="ag-section-label">Fiverr Gigs & Services</p>
          <h2 className="ag-section-title text-balance">Hire Me on Fiverr.</h2>
          <p className="ag-section-desc text-pretty">
            High-performance custom web development, ERP/CRM engineering, and modern business websites built for speed, security, and top-tier SEO.
          </p>
        </Reveal>

        <div className="bento-grid">
          {FIVERR_GIGS.map((gig, i) => (
            <Reveal key={gig.id} className="col-6" delay={(i % 2) * 0.06}>
              <div className="ag-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="gig-image-wrap">
                  <Image
                    src={gig.img}
                    alt={gig.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="gig-img"
                  />
                </div>
                <span className="card-eyebrow" style={{ color: `var(--accent-${gig.accent})` }}>{gig.subtitle}</span>
                <h3 className="card-title" style={{ fontSize: 20, marginBottom: 12 }}>{gig.title}</h3>
                <p className="card-desc" style={{ flexGrow: 1 }}>{gig.desc}</p>
                <div className="tag-row" style={{ marginBottom: 22 }}>
                  {gig.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <a href={gig.link} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: "100%" }}>
                  Order on Fiverr <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
