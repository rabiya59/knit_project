import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKnitComponent } from './search-knit.component';

describe('SearchKnitComponent', () => {
  let component: SearchKnitComponent;
  let fixture: ComponentFixture<SearchKnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchKnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchKnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
