import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictonarDetailComponent } from './dictonar-detail.component';

describe('DictonarDetailComponent', () => {
  let component: DictonarDetailComponent;
  let fixture: ComponentFixture<DictonarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictonarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictonarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
