import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillupComponent } from './skillup.component';

describe('SkillupComponent', () => {
  let component: SkillupComponent;
  let fixture: ComponentFixture<SkillupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillupComponent]
    });
    fixture = TestBed.createComponent(SkillupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
