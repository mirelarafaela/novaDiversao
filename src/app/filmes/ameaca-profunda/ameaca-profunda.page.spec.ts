import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmeacaProfundaPage } from './ameaca-profunda.page';

describe('AmeacaProfundaPage', () => {
  let component: AmeacaProfundaPage;
  let fixture: ComponentFixture<AmeacaProfundaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmeacaProfundaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmeacaProfundaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
