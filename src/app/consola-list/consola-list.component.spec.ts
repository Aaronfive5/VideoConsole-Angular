import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaListComponent } from './consola-list.component';

describe('ConsolaListComponent', () => {
  let component: ConsolaListComponent;
  let fixture: ComponentFixture<ConsolaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
