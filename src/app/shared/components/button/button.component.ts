import { Component, Input, input, OnInit, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonConfig } from './button.config';


@Component({
  selector: 'c-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({required: true}) button!: ButtonConfig
  
}
