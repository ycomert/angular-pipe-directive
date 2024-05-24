import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExample2Component } from './pipes-example2.component';

describe('PipesExample2Component', () => {
  let component: PipesExample2Component;
  let fixture: ComponentFixture<PipesExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesExample2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
