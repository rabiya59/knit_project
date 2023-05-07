import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitListComponent } from './knit-list.component';

describe('KnitListComponent', () => {
  let component: KnitListComponent;
  let fixture: ComponentFixture<KnitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
