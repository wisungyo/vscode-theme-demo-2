"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import ThemeSelector from "@/components/ThemeSelector/ThemeSelector";
import CodePanel from "@/components/CodePanel/CodePanel";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";

const AVAILABLE_THEMES = [
  { id: "andromeeda", name: "Andromeeda" },
  { id: "aurora-x", name: "Aurora X" },
  { id: "ayu-dark", name: "Ayu Dark" },
  { id: "ayu-light", name: "Ayu Light" },
  { id: "ayu-mirage", name: "Ayu Mirage" },
  { id: "catppuccin-frappe", name: "Catppuccin Frappé" },
  { id: "catppuccin-latte", name: "Catppuccin Latte" },
  { id: "catppuccin-macchiato", name: "Catppuccin Macchiato" },
  { id: "catppuccin-mocha", name: "Catppuccin Mocha" },
  { id: "dark-plus", name: "Dark Plus" },
  { id: "dracula", name: "Dracula" },
  { id: "dracula-soft", name: "Dracula Soft" },
  { id: "everforest-dark", name: "Everforest Dark" },
  { id: "everforest-light", name: "Everforest Light" },
  { id: "github-dark", name: "GitHub Dark" },
  { id: "github-dark-default", name: "GitHub Dark Default" },
  { id: "github-dark-dimmed", name: "GitHub Dark Dimmed" },
  { id: "github-dark-high-contrast", name: "GitHub Dark High Contrast" },
  { id: "github-light", name: "GitHub Light" },
  { id: "github-light-default", name: "GitHub Light Default" },
  { id: "github-light-high-contrast", name: "GitHub Light High Contrast" },
  { id: "gruvbox-dark-hard", name: "Gruvbox Dark Hard" },
  { id: "gruvbox-dark-medium", name: "Gruvbox Dark Medium" },
  { id: "gruvbox-dark-soft", name: "Gruvbox Dark Soft" },
  { id: "gruvbox-light-hard", name: "Gruvbox Light Hard" },
  { id: "gruvbox-light-medium", name: "Gruvbox Light Medium" },
  { id: "gruvbox-light-soft", name: "Gruvbox Light Soft" },
  { id: "horizon", name: "Horizon" },
  { id: "horizon-bright", name: "Horizon Bright" },
  { id: "houston", name: "Houston" },
  { id: "kanagawa-dragon", name: "Kanagawa Dragon" },
  { id: "kanagawa-lotus", name: "Kanagawa Lotus" },
  { id: "kanagawa-wave", name: "Kanagawa Wave" },
  { id: "laserwave", name: "LaserWave" },
  { id: "light-plus", name: "Light Plus" },
  { id: "material-theme", name: "Material Theme" },
  { id: "material-theme-darker", name: "Material Theme Darker" },
  { id: "material-theme-lighter", name: "Material Theme Lighter" },
  { id: "material-theme-ocean", name: "Material Theme Ocean" },
  { id: "material-theme-palenight", name: "Material Theme Palenight" },
  { id: "min-dark", name: "Min Dark" },
  { id: "min-light", name: "Min Light" },
  { id: "monokai", name: "Monokai" },
  { id: "night-owl", name: "Night Owl" },
  { id: "night-owl-light", name: "Night Owl Light" },
  { id: "nord", name: "Nord" },
  { id: "one-dark-pro", name: "One Dark Pro" },
  { id: "one-light", name: "One Light" },
  { id: "plastic", name: "Plastic" },
  { id: "poimandres", name: "Poimandres" },
  { id: "red", name: "Red" },
  { id: "rose-pine", name: "Rosé Pine" },
  { id: "rose-pine-dawn", name: "Rosé Pine Dawn" },
  { id: "rose-pine-moon", name: "Rosé Pine Moon" },
  { id: "slack-dark", name: "Slack Dark" },
  { id: "slack-ochin", name: "Slack Ochin" },
  { id: "snazzy-light", name: "Snazzy Light" },
  { id: "solarized-dark", name: "Solarized Dark" },
  { id: "solarized-light", name: "Solarized Light" },
  { id: "synthwave-84", name: "Synthwave '84" },
  { id: "tokyo-night", name: "Tokyo Night" },
  { id: "vesper", name: "Vesper" },
  { id: "vitesse-black", name: "Vitesse Black" },
  { id: "vitesse-dark", name: "Vitesse Dark" },
  { id: "vitesse-light", name: "Vitesse Light" },
];

const AVAILABLE_LANGUAGES = [
  { id: "javascript", name: "JavaScript" },
  { id: "typescript", name: "TypeScript" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "cpp", name: "C++" },
  { id: "csharp", name: "C#" },
  { id: "go", name: "Go" },
  { id: "rust", name: "Rust" },
  { id: "php", name: "PHP" },
  { id: "dart", name: "Dart" },
];

const LANGUAGE_SAMPLES: Record<string, string> = {
  javascript: `import React, { useState, useEffect } from 'react';

export const BeautifulComponent = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Hello, Developer!</h1>
      <button onClick={() => console.log('Clicked!')}>
        Click me: {count}
      </button>
    </div>
  );
};`,
  typescript: `import React, { useState, useEffect } from 'react';

export const BeautifulComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    const timer = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Hello, Developer!</h1>
      <button onClick={(e: React.MouseEvent) => console.log('Clicked!')}>
        Click me: {count}
      </button>
    </div>
  );
};`,
  python: `def fibonacci(n):
    """
    Generate a Fibonacci sequence up to n terms.
    """
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    sequence = [0, 1]
    while len(sequence) < n:
        next_val = sequence[-1] + sequence[-2]
        sequence.append(next_val)
        
    return sequence

if __name__ == "__main__":
    print(fibonacci(10))`,
  java: `import java.util.ArrayList;
import java.util.List;

public class Fibonacci {
    public static List<Integer> generate(int n) {
        List<Integer> sequence = new ArrayList<>();
        if (n <= 0) return sequence;
        
        sequence.add(0);
        if (n == 1) return sequence;
        
        sequence.add(1);
        while (sequence.size() < n) {
            int nextVal = sequence.get(sequence.size() - 1) + sequence.get(sequence.size() - 2);
            sequence.add(nextVal);
        }
        return sequence;
    }

    public static void main(String[] args) {
        System.out.println(generate(10));
    }
}`,
  cpp: `#include <iostream>
#include <vector>

std::vector<int> fibonacci(int n) {
    std::vector<int> sequence;
    if (n <= 0) return sequence;
    
    sequence.push_back(0);
    if (n == 1) return sequence;
    
    sequence.push_back(1);
    while (sequence.size() < n) {
        int next_val = sequence[sequence.size() - 1] + sequence[sequence.size() - 2];
        sequence.push_back(next_val);
    }
    return sequence;
}

int main() {
    auto seq = fibonacci(10);
    for (int num : seq) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}`,
  csharp: `using System;
using System.Collections.Generic;

public class FibonacciGenerator
{
    public static List<int> Generate(int n)
    {
        var sequence = new List<int>();
        if (n <= 0) return sequence;
        
        sequence.Add(0);
        if (n == 1) return sequence;
        
        sequence.Add(1);
        while (sequence.Count < n)
        {
            int nextVal = sequence[sequence.Count - 1] + sequence[sequence.Count - 2];
            sequence.Add(nextVal);
        }
        return sequence;
    }

    public static void Main()
    {
        Console.WriteLine(string.Join(", ", Generate(10)));
    }
}`,
  go: `package main

import "fmt"

func Fibonacci(n int) []int {
	if n <= 0 {
		return []int{}
	}
	if n == 1 {
		return []int{0}
	}

	seq := []int{0, 1}
	for len(seq) < n {
		nextVal := seq[len(seq)-1] + seq[len(seq)-2]
		seq = append(seq, nextVal)
	}
	return seq
}

func main() {
	fmt.Println(Fibonacci(10))
}`,
  rust: `fn fibonacci(n: usize) -> Vec<u32> {
    if n == 0 {
        return vec![];
    } else if n == 1 {
        return vec![0];
    }

    let mut sequence = vec![0, 1];
    while sequence.len() < n {
        let len = sequence.len();
        let next_val = sequence[len - 1] + sequence[len - 2];
        sequence.push(next_val);
    }
    sequence
}

fn main() {
    let seq = fibonacci(10);
    println!("{:?}", seq);
}`,
  php: `<?php

function fibonacci(int $n): array {
    if ($n <= 0) return [];
    if ($n === 1) return [0];

    $sequence = [0, 1];
    while (count($sequence) < $n) {
        $nextVal = $sequence[count($sequence) - 1] + $sequence[count($sequence) - 2];
        $sequence[] = $nextVal;
    }
    return $sequence;
}

print_r(fibonacci(10));`,
  dart: `List<int> fibonacci(int n) {
  if (n <= 0) return [];
  if (n == 1) return [0];

  List<int> sequence = [0, 1];
  while (sequence.length < n) {
    int nextVal = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.add(nextVal);
  }
  return sequence;
}

void main() {
  print(fibonacci(10));
}`,
};

export default function Home() {
  const [theme, setTheme] = useState<string>("dracula");
  const [language, setLanguage] = useState<string>("typescript");

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.hero}>
          <h1 className={styles.title}>VS Code Themes</h1>
          <p className={styles.subtitle}>A clean, beautiful showcase of your favorite editor themes.</p>
        </div>
        <div className={styles.toolbar}>
          <ThemeSelector selectedTheme={theme} onThemeChange={setTheme} themes={AVAILABLE_THEMES} />
          <LanguageSelector
            selectedLanguage={language}
            onLanguageChange={setLanguage}
            languages={AVAILABLE_LANGUAGES}
          />
        </div>
      </header>

      <section className={styles.showcase}>
        <CodePanel
          code={LANGUAGE_SAMPLES[language] || LANGUAGE_SAMPLES["typescript"]}
          theme={theme}
          language={language}
        />
      </section>

      <footer className={styles.footer}>
        <p>Built with Next.js & Shiki.</p>
      </footer>
    </main>
  );
}
