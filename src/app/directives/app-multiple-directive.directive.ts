// app-multiple.directive.ts

import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true
})
export class AppMultipleDirective implements OnInit {
  @Input() appMultiple: number=0;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit() {
    this.viewContainerRef.clear();
    for (let i = 0; i < this.appMultiple; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}

