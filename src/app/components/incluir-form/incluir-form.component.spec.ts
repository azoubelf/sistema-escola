import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirFormComponent } from './incluir-form.component';

describe('IncluirFormComponent', () => {
  let component: IncluirFormComponent;
  let fixture: ComponentFixture<IncluirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
