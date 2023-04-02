import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpttransferComponent } from './tpttransfer.component';

describe('TpttransferComponent', () => {
  let component: TpttransferComponent;
  let fixture: ComponentFixture<TpttransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpttransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
