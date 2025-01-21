import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisableDetailsComponent } from './revisable-details.component';

describe('RevisableDetailsComponent', () => {
  let component: RevisableDetailsComponent;
  let fixture: ComponentFixture<RevisableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisableDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
