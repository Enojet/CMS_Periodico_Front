import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisableListComponent } from './revisable-list.component';

describe('RevisableListComponent', () => {
  let component: RevisableListComponent;
  let fixture: ComponentFixture<RevisableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
