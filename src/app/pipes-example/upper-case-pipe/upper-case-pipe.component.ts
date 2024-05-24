import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-case-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upper-case-pipe.component.html',
  styleUrl: './upper-case-pipe.component.scss'
})
export class UpperCasePipeComponent {
  text: string = 'hello Pair2';
}
