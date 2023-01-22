import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIncluirComponent } from './main-incluir.component';

describe('MainIncluirComponent', () => {
  let component: MainIncluirComponent;
  let fixture: ComponentFixture<MainIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIncluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
