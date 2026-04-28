'use client';

import React from 'react';
import styles from './ThemeSelector.module.css';

export interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
  themes: { id: string; name: string }[];
}

export default function ThemeSelector({ selectedTheme, onThemeChange, themes }: ThemeSelectorProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="theme-select" className={styles.label}>
        Select Theme:
      </label>
      <div className={styles.selectWrapper}>
        <select
          id="theme-select"
          className={styles.select}
          value={selectedTheme}
          onChange={(e) => onThemeChange(e.target.value)}
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
        <div className={styles.chevron}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
