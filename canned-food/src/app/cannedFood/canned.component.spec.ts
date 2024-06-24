import { CannedComponent } from './canned.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('CannedComponent', () => {
  let component: CannedComponent;
  let fixture: ComponentFixture<CannedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CannedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
