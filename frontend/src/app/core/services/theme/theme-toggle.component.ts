import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  constructor(public readonly theme: ThemeService) {}

  protected readonly modeLabel = computed(() =>
    this.theme.mode() === 'dark' ? 'Dark' : 'Light'
  );

  toggle(): void {
    this.theme.toggle();
  }
}

