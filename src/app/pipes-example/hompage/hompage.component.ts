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
import { MultipleDirective } from '../../directives/app-multiple-directive.directive';
import { WelcomeDirective } from '../../directives/app-welcome.directive';
import { FormControlErrorMessagePipe } from '../../pipes/form-control-error-message.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,

  imports: [
    CurrencyPipeComponent,
    DatePipeComponent,
    DecimalPipeComponent,
    PercentPipeComponent,
    PipesExampleComponent,
    UpperCasePipeComponent,
    TranslatePipeComponent,
    MultipleDirective,
    AppButtonDirective,
    AppNoCharacterInputDirective,
    WelcomeDirective,
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './hompage.component.html',
  styleUrl: './hompage.component.scss'
})
export class HompageComponent {

}
