'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import CodePanel from '@/components/CodePanel/CodePanel';



const AVAILABLE_THEMES = [
  { id: 'andromeeda', name: 'Andromeeda' },
  { id: 'aurora-x', name: 'Aurora X' },
  { id: 'ayu-dark', name: 'Ayu Dark' },
  { id: 'ayu-light', name: 'Ayu Light' },
  { id: 'ayu-mirage', name: 'Ayu Mirage' },
  { id: 'catppuccin-frappe', name: 'Catppuccin Frappé' },
  { id: 'catppuccin-latte', name: 'Catppuccin Latte' },
  { id: 'catppuccin-macchiato', name: 'Catppuccin Macchiato' },
  { id: 'catppuccin-mocha', name: 'Catppuccin Mocha' },
  { id: 'dark-plus', name: 'Dark Plus' },
  { id: 'dracula', name: 'Dracula' },
  { id: 'dracula-soft', name: 'Dracula Soft' },
  { id: 'everforest-dark', name: 'Everforest Dark' },
  { id: 'everforest-light', name: 'Everforest Light' },
  { id: 'github-dark', name: 'GitHub Dark' },
  { id: 'github-dark-default', name: 'GitHub Dark Default' },
  { id: 'github-dark-dimmed', name: 'GitHub Dark Dimmed' },
  { id: 'github-dark-high-contrast', name: 'GitHub Dark High Contrast' },
  { id: 'github-light', name: 'GitHub Light' },
  { id: 'github-light-default', name: 'GitHub Light Default' },
  { id: 'github-light-high-contrast', name: 'GitHub Light High Contrast' },
  { id: 'gruvbox-dark-hard', name: 'Gruvbox Dark Hard' },
  { id: 'gruvbox-dark-medium', name: 'Gruvbox Dark Medium' },
  { id: 'gruvbox-dark-soft', name: 'Gruvbox Dark Soft' },
  { id: 'gruvbox-light-hard', name: 'Gruvbox Light Hard' },
  { id: 'gruvbox-light-medium', name: 'Gruvbox Light Medium' },
  { id: 'gruvbox-light-soft', name: 'Gruvbox Light Soft' },
  { id: 'horizon', name: 'Horizon' },
  { id: 'horizon-bright', name: 'Horizon Bright' },
  { id: 'houston', name: 'Houston' },
  { id: 'kanagawa-dragon', name: 'Kanagawa Dragon' },
  { id: 'kanagawa-lotus', name: 'Kanagawa Lotus' },
  { id: 'kanagawa-wave', name: 'Kanagawa Wave' },
  { id: 'laserwave', name: 'LaserWave' },
  { id: 'light-plus', name: 'Light Plus' },
  { id: 'material-theme', name: 'Material Theme' },
  { id: 'material-theme-darker', name: 'Material Theme Darker' },
  { id: 'material-theme-lighter', name: 'Material Theme Lighter' },
  { id: 'material-theme-ocean', name: 'Material Theme Ocean' },
  { id: 'material-theme-palenight', name: 'Material Theme Palenight' },
  { id: 'min-dark', name: 'Min Dark' },
  { id: 'min-light', name: 'Min Light' },
  { id: 'monokai', name: 'Monokai' },
  { id: 'night-owl', name: 'Night Owl' },
  { id: 'night-owl-light', name: 'Night Owl Light' },
  { id: 'nord', name: 'Nord' },
  { id: 'one-dark-pro', name: 'One Dark Pro' },
  { id: 'one-light', name: 'One Light' },
  { id: 'plastic', name: 'Plastic' },
  { id: 'poimandres', name: 'Poimandres' },
  { id: 'red', name: 'Red' },
  { id: 'rose-pine', name: 'Rosé Pine' },
  { id: 'rose-pine-dawn', name: 'Rosé Pine Dawn' },
  { id: 'rose-pine-moon', name: 'Rosé Pine Moon' },
  { id: 'slack-dark', name: 'Slack Dark' },
  { id: 'slack-ochin', name: 'Slack Ochin' },
  { id: 'snazzy-light', name: 'Snazzy Light' },
  { id: 'solarized-dark', name: 'Solarized Dark' },
  { id: 'solarized-light', name: 'Solarized Light' },
  { id: 'synthwave-84', name: "Synthwave '84" },
  { id: 'tokyo-night', name: 'Tokyo Night' },
  { id: 'vesper', name: 'Vesper' },
  { id: 'vitesse-black', name: 'Vitesse Black' },
  { id: 'vitesse-dark', name: 'Vitesse Dark' },
  { id: 'vitesse-light', name: 'Vitesse Light' },
];

const SAMPLE_CODE = `import React, { useState, useEffect } from 'react';

/**
 * A sample component to demonstrate syntax highlighting
 * with various VS Code themes using Shiki.
 */
export const BeautifulComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(\`Clicked \${count} times!\`);
  };

  return (
    <div className="container">
      <h1>Hello, Developer!</h1>
      <p>This code block changes colors based on the theme.</p>
      <button onClick={handleClick}>
        Click me: {count}
      </button>
    </div>
  );
};

export default BeautifulComponent;
`;

export default function Home() {
  const [theme, setTheme] = useState<string>('dracula');

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.hero}>
          <h1 className={styles.title}>VS Code Themes</h1>
          <p className={styles.subtitle}>
            A clean, beautiful showcase of your favorite editor themes.
          </p>
        </div>
        <div className={styles.toolbar}>
          <ThemeSelector 
            selectedTheme={theme} 
            onThemeChange={setTheme} 
            themes={AVAILABLE_THEMES} 
          />
        </div>
      </header>

      <section className={styles.showcase}>
        <CodePanel 
          code={SAMPLE_CODE} 
          theme={theme} 
          language="tsx" 
        />
      </section>
      
      <footer className={styles.footer}>
        <p>Built with Next.js & Shiki.</p>
      </footer>
    </main>
  );
}
