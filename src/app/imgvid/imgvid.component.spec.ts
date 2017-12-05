import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgvidComponent } from './imgvid.component';

describe('ImgvidComponent', () => {
  let component: ImgvidComponent;
  let fixture: ComponentFixture<ImgvidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgvidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
