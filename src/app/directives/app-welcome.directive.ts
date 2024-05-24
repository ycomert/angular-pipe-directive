import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { timer } from 'rxjs';

@Directive({
  selector: '[appWelcome]',
  standalone: true
})
export class WelcomeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
    timer(delay).subscribe(() => {
      this.viewContainer.clear();
    });
  }
}
