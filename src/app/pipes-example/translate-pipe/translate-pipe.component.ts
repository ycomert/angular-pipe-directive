import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-translate-pipe',
  standalone: true,
  imports: [CommonModule,TranslatePipe],
  templateUrl: './translate-pipe.component.html',
  styleUrl: './translate-pipe.component.scss'
})
export class TranslatePipeComponent {
  someText:string ="hello"
}
