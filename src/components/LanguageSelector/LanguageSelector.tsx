'use client';

import React from 'react';
import styles from './LanguageSelector.module.css';

export interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: { id: string; name: string }[];
}

export default function LanguageSelector({ selectedLanguage, onLanguageChange, languages }: LanguageSelectorProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="language-select" className={styles.label}>
        Language:
      </label>
      <div className={styles.selectWrapper}>
        <select
          id="language-select"
          className={styles.select}
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
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
