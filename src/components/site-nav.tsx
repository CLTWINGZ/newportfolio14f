"use client";

import { useEffect, useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["home", ...NAV_LINKS.map((l) => l.id)];
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      for (const id of ids) {
        const r = document.getElementById(id)?.getBoundingClientRect();
        if (r && r.top < window.innerHeight * 0.45 && r.bottom > window.innerHeight * 0.45) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className={`ag-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="ag-nav-brand" onClick={() => setOpen(false)}>
          <div className="ag-nav-logo">{PROFILE.initials}</div>
          <span className="ag-nav-wordmark">{PROFILE.shortName}</span>
        </a>

        <div className="ag-nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`ag-nav-item ${active === id ? "active" : ""}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="ag-nav-actions">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="ag-icon-btn" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary hire-me-btn btn-sm">
            Hire Me
          </a>
          <button className="ag-icon-btn mobile-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={`mailto:${PROFILE.email}`} className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
