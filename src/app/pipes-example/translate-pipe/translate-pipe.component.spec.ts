import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePipeComponent } from './translate-pipe.component';

describe('TranslatePipeComponent', () => {
  let component: TranslatePipeComponent;
  let fixture: ComponentFixture<TranslatePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslatePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslatePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
