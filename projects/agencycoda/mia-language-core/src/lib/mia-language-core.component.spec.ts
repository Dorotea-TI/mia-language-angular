import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaLanguageCoreComponent } from './mia-language-core.component';

describe('MiaLanguageCoreComponent', () => {
  let component: MiaLanguageCoreComponent;
  let fixture: ComponentFixture<MiaLanguageCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaLanguageCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaLanguageCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
