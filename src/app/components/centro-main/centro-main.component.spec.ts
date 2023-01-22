import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroMainComponent } from './centro-main.component';

describe('CentroMainComponent', () => {
  let component: CentroMainComponent;
  let fixture: ComponentFixture<CentroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
