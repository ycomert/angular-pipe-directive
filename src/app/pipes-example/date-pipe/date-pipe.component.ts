import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.scss'
})
export class DatePipeComponent {

  today: number = Date.now();
  price: number = 1234.56;
  ratio: number = 0.567;
  value: number = 1234.56;
  data = {
    name: 'Angular',
    version: 12,
    features: ['components', 'directives', 'pipes']
  };
  text: string = 'hello world';
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
