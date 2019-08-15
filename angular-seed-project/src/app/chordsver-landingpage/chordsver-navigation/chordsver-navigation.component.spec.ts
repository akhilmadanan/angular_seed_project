import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsverNavigationComponent } from './chordsver-navigation.component';

describe('ChordsverNavigationComponent', () => {
  let component: ChordsverNavigationComponent;
  let fixture: ComponentFixture<ChordsverNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsverNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsverNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
