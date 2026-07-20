import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonConfig, ButtonComponent } from './shared/components/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CARVA-front';
  button: ButtonConfig = {
    label: 'Salvar',
    loading: false,
    disabled: false,
    severity: 'primary',
  };
}
