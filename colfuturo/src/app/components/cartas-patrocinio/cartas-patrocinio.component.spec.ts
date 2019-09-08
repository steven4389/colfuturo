import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasPatrocinioComponent } from './cartas-patrocinio.component';

describe('CartasPatrocinioComponent', () => {
  let component: CartasPatrocinioComponent;
  let fixture: ComponentFixture<CartasPatrocinioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasPatrocinioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasPatrocinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
