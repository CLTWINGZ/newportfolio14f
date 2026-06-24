import { PROFILE } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">{PROFILE.initials}</span>
          <div>
            <p className="footer-name">{PROFILE.shortName}</p>
            <p className="footer-role">{PROFILE.role}</p>
          </div>
        </div>

        <div className="footer-socials">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social">
            <Github size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="footer-social">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-copy">
          {"\u00A9 "}
          {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &amp; Three.js.
        </p>
      </div>
    </footer>
  );
}
