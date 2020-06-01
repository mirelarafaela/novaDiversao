import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreysAnatomyPage } from './greys-anatomy.page';

describe('GreysAnatomyPage', () => {
  let component: GreysAnatomyPage;
  let fixture: ComponentFixture<GreysAnatomyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreysAnatomyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreysAnatomyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
