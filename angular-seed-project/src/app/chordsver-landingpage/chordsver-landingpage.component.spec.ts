import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsverLandingpageComponent } from './chordsver-landingpage.component';

describe('ChordsverLandingpageComponent', () => {
  let component: ChordsverLandingpageComponent;
  let fixture: ComponentFixture<ChordsverLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsverLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsverLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
