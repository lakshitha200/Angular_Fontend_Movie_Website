import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCommingComponent } from './up-comming.component';

describe('UpCommingComponent', () => {
  let component: UpCommingComponent;
  let fixture: ComponentFixture<UpCommingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpCommingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpCommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
