import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.scss'
})
export class PipesExampleComponent {
  data = {
    name: 'Angular',
    version: 12,
    features: ['components', 'directives', 'pipes']
  };
  text: string = 'hello world';
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
