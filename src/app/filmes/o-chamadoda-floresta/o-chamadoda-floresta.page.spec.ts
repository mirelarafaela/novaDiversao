import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OChamadodaFlorestaPage } from './o-chamadoda-floresta.page';

describe('OChamadodaFlorestaPage', () => {
  let component: OChamadodaFlorestaPage;
  let fixture: ComponentFixture<OChamadodaFlorestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OChamadodaFlorestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OChamadodaFlorestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
