import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtwoComponent } from './dashtwo.component';

describe('DashtwoComponent', () => {
  let component: DashtwoComponent;
  let fixture: ComponentFixture<DashtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
