"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const credibilityRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (credibilityRef.current) {
      observer.observe(credibilityRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href="#" className={styles.logoLink} aria-label="Excellere home">
              <Image
                src="/assets/hyperstudio-hero/images/excellere-typography-white.png"
                alt="Excellere"
                width={95}
                height={24}
                priority
              />
            </a>

            <span className={styles.separator} aria-hidden />

            <nav className={styles.nav}>
              <a href="#services">SERVICES</a>
              <a href="#portfolio">
                PORTFOLIO <sup className={styles.newTag}>NEW</sup>
              </a>
              <a href="#process">PROCESS</a>
            </nav>

            <a href="#contact" className={styles.chatButton}>
              <Image
                src="/assets/hyperstudio-hero/images/ruben.jpg"
                alt=""
                width={24}
                height={24}
              />
              <span>LET&apos;S CHAT</span>
            </a>
          </div>
        </header>

        <div className={styles.heroContent}>
          <div className={styles.spotsPill}>
            <span className={styles.liveDot} />
            <span>2/5 SPOTS LEFT FOR MARCH</span>
          </div>

          <h1 className={styles.title}>
            World-class branding and
            <br />
            websites for startups.
          </h1>

          <div className={styles.ctas}>
            <a href="#contact" className={styles.primaryCta}>
              START NOW
              <Image
                src="/assets/hyperstudio-hero/images/arrow-right.svg"
                alt=""
                width={14}
                height={14}
              />
            </a>

            <a href="#portfolio" className={styles.secondaryCta}>
              VIEW WORK
              <Image
                src="/assets/hyperstudio-hero/images/arrow-down.svg"
                alt=""
                width={14}
                height={14}
              />
            </a>
          </div>
        </div>

        <div className={styles.handsWrap}>
          <Image
            src="/assets/hyperstudio-hero/images/hero-desktop.webp"
            alt="Abstract hands illustration"
            width={3217}
            height={845}
            priority
            className={styles.handsDesktop}
            sizes="(max-width: 800px) 0vw, 100vw"
          />
          <Image
            src="/assets/hyperstudio-hero/images/hero-mobile.webp"
            alt="Abstract hands illustration"
            width={3143}
            height={1338}
            priority
            className={styles.handsMobile}
            sizes="(max-width: 800px) 100vw, 0vw"
          />
        </div>
      </section>

      {/* Credibility Band */}
      <section ref={credibilityRef} className={styles.credibilityBand}>
        <p className={styles.audienceLine}>
          Built for startups, creators, and premium brands.
        </p>
        
        <div className={styles.proofChips}>
          <div className={styles.proofChip}>
            <span className={styles.chipTitle}>Founder-led</span>
            <span className={styles.chipDesc}>Personal oversight on every project</span>
          </div>
          
          <div className={styles.chipDivider} aria-hidden="true" />
          
          <div className={styles.proofChip}>
            <span className={styles.chipTitle}>End-to-end</span>
            <span className={styles.chipDesc}>Strategy, design & development</span>
          </div>
          
          <div className={styles.chipDivider} aria-hidden="true" />
          
          <div className={styles.proofChip}>
            <span className={styles.chipTitle}>Fast launches</span>
            <span className={styles.chipDesc}>Ship in weeks, not months</span>
          </div>
        </div>
      </section>
    </div>
  );
}
