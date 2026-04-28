'use client';

import React, { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import styles from './CodePanel.module.css';

export interface CodePanelProps {
  code: string;
  theme: string;
  language: string;
}

export default function CodePanel({ code, theme, language }: CodePanelProps) {
  const [html, setHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const highlightCode = async () => {
      try {
        const highlighted = await codeToHtml(code, {
          lang: language,
          theme: theme,
        });
        if (isMounted) {
          setHtml(highlighted);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error highlighting code:', error);
        if (isMounted) setIsLoading(false);
      }
    };

    highlightCode();

    return () => {
      isMounted = false;
    };
  }, [code, theme, language]);

  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <div className={styles.controls}>
          <span className={`${styles.control} ${styles.close}`}></span>
          <span className={`${styles.control} ${styles.minimize}`}></span>
          <span className={`${styles.control} ${styles.maximize}`}></span>
        </div>
        <div className={styles.title}>example.{language === 'javascript' ? 'js' : language === 'typescript' ? 'ts' : language}</div>
        <div className={styles.placeholder}></div>
      </div>
      <div className={`${styles.content} ${isLoading ? styles.loading : ''}`}>
        {isLoading ? (
          <div className={styles.loader}>Loading theme...</div>
        ) : (
          <div
            className={styles.codeContainer}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </div>
  );
}
