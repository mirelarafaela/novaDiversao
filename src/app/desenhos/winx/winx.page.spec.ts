import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinxPage } from './winx.page';

describe('WinxPage', () => {
  let component: WinxPage;
  let fixture: ComponentFixture<WinxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
