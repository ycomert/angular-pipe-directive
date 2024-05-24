import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decimal-pipe.component.html',
  styleUrl: './decimal-pipe.component.scss'
})
export class DecimalPipeComponent {
  value: number = 1234.56;
}
