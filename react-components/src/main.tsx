import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import ProfileCard from './components/ProfileCard/ProfileCard';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import SplashCursor from './components/SplashCursor/SplashCursor';
import LogoLoop from './components/LogoLoop/LogoLoop';
import BlurText from './components/BlurText/BlurText';

// Splash Cursor
const splashCursorRoot = document.getElementById('react-splash-cursor-root');
if (splashCursorRoot) {
  createRoot(splashCursorRoot).render(
    <SplashCursor 
      VELOCITY_DISSIPATION={2.5}
      DENSITY_DISSIPATION={2.5}
      COLOR_UPDATE_SPEED={1}
      SPLAT_FORCE={5500}
      PRESSURE={0.15}
      COLOR="#c2c168"
    />
  );
}

// Profile Card
const profileRoot = document.getElementById('react-profile-root');
if (profileRoot) {
  const root = createRoot(profileRoot);
  const renderProfile = () => {
    const role = profileRoot.getAttribute('data-role') || 'Siswa TKJ · Front-End Developer';
    root.render(
      <ProfileCard 
        name="Adhika Fadhil"
        title={role}
        handle="adhikafadhil"
        status="Online"
        contactText="Contact Me"
        avatarUrl="./assets/hero-monogram.png" // User's avatar
        iconUrl="" // Placeholder
      />
    );
  };
  renderProfile();
  profileRoot.addEventListener('langUpdate', renderProfile);
}

// Scroll Reveal
const aboutTextRoot = document.getElementById('react-about-text-root');
if (aboutTextRoot) {
  const root = createRoot(aboutTextRoot);
  const renderAboutText = () => {
    const text = aboutTextRoot.getAttribute('data-text') || '';
    root.render(
      <ScrollReveal baseRotation={0} textClassName="about-desc-react">
        {text}
      </ScrollReveal>
    );
  };
  renderAboutText();
  aboutTextRoot.addEventListener('langUpdate', renderAboutText);
}

// Logo Loop
const logoLoopRoot = document.getElementById('react-logo-loop-root');
if (logoLoopRoot) {
  const tags = ["Front-End", "HTML", "CSS", "JavaScript", "Linux", "Docker", "Networking", "TKJ"];
  const items = tags.map((tag, i) => ({ id: i, content: <span className="logo-item px-4 text-xl font-medium text-[var(--gold)]">{tag}</span> }));
  createRoot(logoLoopRoot).render(
    <LogoLoop items={items} direction="right" speed={70} />
  );
}

// Blur Text
const blurTitles = document.querySelectorAll('.react-blur-title');
blurTitles.forEach((node) => {
  const root = createRoot(node);
  const renderBlur = () => {
    const text = node.getAttribute('data-text') || '';
    root.render(
      <BlurText key={text} delay={50} text={text} className="section-title !mb-0" />
    );
  };
  renderBlur();
  node.addEventListener('langUpdate', renderBlur);
});
