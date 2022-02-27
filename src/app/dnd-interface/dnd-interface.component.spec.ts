import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndInterfaceComponent } from './dnd-interface.component';

describe('DndInterfaceComponent', () => {
  let component: DndInterfaceComponent;
  let fixture: ComponentFixture<DndInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
