"use client";

import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { CERT_GROUPS, ISSUERS, TOTAL_CERTS, type Issuer } from "@/lib/portfolio-data";

const FALLBACK: Issuer = { color: "#4d8dff", abbr: "?" };

function Logo({ issuer, brand, size }: { issuer: string; brand: Issuer; size: "sm" | "lg" }) {
  const cls = size === "sm" ? "cert-badge-logo" : "cert-issuer-logo";
  return (
    <div className={cls} style={!brand.logoUrl ? { background: brand.color } : undefined}>
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={brand.logoUrl} alt={issuer} />
      ) : (
        brand.abbr
      )}
    </div>
  );
}

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="ag-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-surface)" }}
    >
      <div className="ag-section-inner">
        <Reveal className="ag-section-header">
          <p className="ag-section-label">Licenses & Certifications</p>
          <h2 className="ag-section-title text-balance">
            <span className="gradient-text">{TOTAL_CERTS}+</span> credentials earned.
          </h2>
          <p className="ag-section-desc text-pretty">
            Verified certifications from IBM, Google, Microsoft, DeepLearning.AI, and leading universities.
          </p>
        </Reveal>

        <Reveal className="cert-badges">
          {CERT_GROUPS.map((g) => {
            const brand = ISSUERS[g.issuer] ?? FALLBACK;
            return (
              <div key={g.issuer} className="cert-badge" style={{ borderColor: `${brand.color}40` }}>
                <Logo issuer={g.issuer} brand={brand} size="sm" />
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: brand.color, lineHeight: 1 }}>{g.issuer}</p>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                    {g.certs.length} cert{g.certs.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {CERT_GROUPS.map((g, gi) => {
            const brand = ISSUERS[g.issuer] ?? FALLBACK;
            return (
              <Reveal key={g.issuer} delay={Math.min(gi * 0.04, 0.2)}>
                <div className="cert-issuer-card">
                  <div className="cert-issuer-head">
                    <Logo issuer={g.issuer} brand={brand} size="lg" />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>{g.issuer}</p>
                      <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>
                        {g.certs.length} certificate{g.certs.length > 1 ? "s" : ""} earned
                      </p>
                    </div>
                    <div className="verified-pill" style={{ color: brand.color, background: `${brand.color}1a`, border: `1px solid ${brand.color}40` }}>
                      Verified
                    </div>
                  </div>
                  <div className="cert-divider" />
                  <div className="cert-list">
                    {g.certs.map((cert, ci) => {
                      const isLink = !!cert.url;
                      const Tag = (isLink ? "a" : "div") as "a";
                      return (
                        <Tag
                          key={`${g.issuer}-${ci}`}
                          {...(isLink ? { href: cert.url, target: "_blank", rel: "noreferrer" } : {})}
                          className="cert-chip"
                        >
                          <BadgeCheck size={14} color={brand.color} style={{ flexShrink: 0 }} />
                          <span>{cert.name}</span>
                          {isLink && <ArrowUpRight size={12} style={{ opacity: 0.4 }} />}
                        </Tag>
                      );
                    })}
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
