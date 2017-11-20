import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInComponent } from './content-in.component';

describe('ContentInComponent', () => {
  let component: ContentInComponent;
  let fixture: ComponentFixture<ContentInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
