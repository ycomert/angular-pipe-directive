import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-pipe.component.html',
  styleUrl: './currency-pipe.component.scss'
})
export class CurrencyPipeComponent {
  price: number = 1234.56;
}
