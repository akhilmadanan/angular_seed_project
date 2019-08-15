import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsverLoginComponent } from './chordsver-login.component';

describe('ChordsverLoginComponent', () => {
  let component: ChordsverLoginComponent;
  let fixture: ComponentFixture<ChordsverLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsverLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
