import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyPipeComponent } from '../currency-pipe/currency-pipe.component';
import { DatePipeComponent } from '../date-pipe/date-pipe.component';
import { DecimalPipeComponent } from '../decimal-pipe/decimal-pipe.component';
import { PercentPipeComponent } from '../percent-pipe/percent-pipe.component';
import { PipesExampleComponent } from '../pipes-example/pipes-example.component';
import { UpperCasePipeComponent } from '../upper-case-pipe/upper-case-pipe.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslatePipeComponent } from '../translate-pipe/translate-pipe.component';
import { AppButtonDirective } from '../../directives/app-button.directive';
import { AppNoCharacterInputDirective } from '../../directives/app-no-character-input.directive';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-pipes-example2',
  standalone: true,

  imports: [
    CurrencyPipeComponent,
    DatePipeComponent,
    DecimalPipeComponent,
    PercentPipeComponent,
    PipesExampleComponent,
    UpperCasePipeComponent,
    TranslatePipeComponent,
    AppButtonDirective,
    AppNoCharacterInputDirective,
    CommonModule
  ],
  templateUrl: './pipes-example2.component.html',
  styleUrl: './pipes-example2.component.scss'
})
export class PipesExample2Component {

}
