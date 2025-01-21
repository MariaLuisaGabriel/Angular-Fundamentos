import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagcparametrosComponent } from './pagcparametros.component';

describe('PagcparametrosComponent', () => {
  let component: PagcparametrosComponent;
  let fixture: ComponentFixture<PagcparametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagcparametrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagcparametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
