"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronRight, Download, Github, Code2 } from "lucide-react";
import { PROFILE, STATS } from "@/lib/portfolio-data";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

const ROTATING = ["Sri Lanka", "Open for roles", "Full-Stack Dev"];
const HEADLINE = "Hi, I'm Chethana — Full-Stack Engineer";

function useTypewriter(words: string[], opts?: { loop?: boolean }) {
  const [text, setText] = useState("");
  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wordIdx];
      charIdx += deleting ? -1 : 1;
      setText(word.substring(0, charIdx));
      let speed = deleting ? 40 : 85;
      if (!deleting && charIdx === word.length) {
        if (!opts?.loop && words.length === 1) return;
        speed = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 400;
      }
      timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, opts?.loop]);
  return text;
}

export function Hero() {
  const headline = useTypewriter([HEADLINE]);
  const rotating = useTypewriter(ROTATING, { loop: true });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".ag-stat-value").forEach((node, i) => {
            setTimeout(() => {
              node.classList.remove("pop");
              void (node as HTMLElement).offsetWidth;
              node.classList.add("pop");
            }, i * 120);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="home" className="ag-hero">
      <div className="hero-canvas">
        <HeroScene />
      </div>

      <div className="ag-hero-content">
        <div className="ag-hero-eyebrow">
          <span className="ag-hero-eyebrow-dot" />
          Open to Opportunities · <span style={{ color: "var(--primary)" }}>{rotating}</span>
          <span className="typewriter-cursor" />
        </div>

        <div className="ag-hero-photo-wrap">
          <div className="profile-badge profile-badge-top">
            <span className="profile-badge-dot" />
            Available for work
          </div>
          <div className="profile-ring-outer">
            <div className="profile-ring-inner">
              <Image src={PROFILE.photo} alt={PROFILE.name} className="profile-img" width={150} height={150} priority />
            </div>
          </div>
          <div className="profile-badge profile-badge-bottom">
            <Code2 size={13} />
            {PROFILE.tagline}
          </div>
        </div>

        <h1 className="ag-hero-title">
          <span className="gradient-text hero-min-h">{headline}</span>
          <span className="typewriter-cursor" />
        </h1>

        <p className="ag-hero-subtitle">
          <strong>{PROFILE.name}</strong> — {PROFILE.bio}
        </p>

        <div className="profile-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ChevronRight size={16} />
          </a>
          <a href={PROFILE.cv} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Download size={15} /> View CV
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={15} /> GitHub
          </a>
        </div>

        <div className="profile-stats" ref={statsRef}>
          {STATS.map((s) => (
            <div key={s.label} className="ag-stat">
              <div className="ag-stat-value">{s.value}</div>
              <div className="ag-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="scroll-cue"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to projects"
      >
        <span>Scroll</span>
        <span className="scroll-cue-line" />
      </button>
    </section>
  );
}
