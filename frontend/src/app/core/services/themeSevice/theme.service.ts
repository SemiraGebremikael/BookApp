import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'bookapp.theme';

  readonly mode = signal<ThemeMode>('light');

  constructor() {
    const saved = (localStorage.getItem(this.storageKey) ?? '') as ThemeMode;
    this.setMode(saved === 'dark' ? 'dark' : 'light', false);
  }

  toggle(): void {
    this.setMode(this.mode() === 'dark' ? 'light' : 'dark');
  }

  setMode(mode: ThemeMode, persist = true): void {
    this.mode.set(mode);

    // Expose theme to CSS
    document.documentElement.setAttribute('data-theme', mode);

    // Also set color-scheme for correct form controls
    document.documentElement.style.colorScheme = mode;

    if (persist) {
      localStorage.setItem(this.storageKey, mode);
    }
  }
}

