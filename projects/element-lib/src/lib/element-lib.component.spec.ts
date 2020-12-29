import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLibComponent } from './element-lib.component';

describe('ElementLibComponent', () => {
  let component: ElementLibComponent;
  let fixture: ComponentFixture<ElementLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
