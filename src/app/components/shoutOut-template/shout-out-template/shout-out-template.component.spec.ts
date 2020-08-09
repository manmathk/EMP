import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutOutTemplateComponent } from './shout-out-template.component';

describe('ShoutOutTemplateComponent', () => {
  let component: ShoutOutTemplateComponent;
  let fixture: ComponentFixture<ShoutOutTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoutOutTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutOutTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
