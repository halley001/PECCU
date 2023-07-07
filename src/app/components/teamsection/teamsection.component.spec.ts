import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsectionComponent } from './teamsection.component';

describe('TeamsectionComponent', () => {
  let component: TeamsectionComponent;
  let fixture: ComponentFixture<TeamsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsectionComponent]
    });
    fixture = TestBed.createComponent(TeamsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
