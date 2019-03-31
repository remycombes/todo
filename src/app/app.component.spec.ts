import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Navigation } from 'selenium-webdriver';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
      ],
      imports: [
        CoreModule, 
        RouterModule
      ]
    }).compileComponents();
  }));
  /*
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  */
});
