'use client';

import React from 'react';
import styles from './LanguageSelector.module.css';

export interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: { id: string; name: string }[];
}

export default function LanguageSelector({ selectedLanguage, onLanguageChange, languages }: LanguageSelectorProps) {
  const selectedLanguageName = languages.find(l => l.id === selectedLanguage)?.name || selectedLanguage;

  return (
    <div className={styles.container}>
      <span className={styles.label}>
        Language:
      </span>
      <div className={styles.selectWrapper}>
        <span className={styles.selectedValue}>{selectedLanguageName}</span>
        <div className={styles.chevron}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <select
        id="language-select"
        className={styles.invisibleSelect}
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
