import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './percent-pipe.component.html',
  styleUrl: './percent-pipe.component.scss'
})
export class PercentPipeComponent {
  ratio: number = 0.567;
}
