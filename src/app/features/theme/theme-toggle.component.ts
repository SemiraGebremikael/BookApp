import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/themeSevice/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
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

