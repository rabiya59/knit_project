import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitInputSearchComponent } from './knit-input-search.component';

describe('KnitInputSearchComponent', () => {
  let component: KnitInputSearchComponent;
  let fixture: ComponentFixture<KnitInputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnitInputSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnitInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
