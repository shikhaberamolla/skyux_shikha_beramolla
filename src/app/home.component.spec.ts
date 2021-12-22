import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';
// Component we're going to test
import {
  HomeComponent
} from './home.component';

describe('Home component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyAppTestModule
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should display a sky-alert', () => {
  //   const alertEl = fixture.nativeElement.querySelector('sky-alert');

  //   // Using custom expect matchers
  //   expect(alertEl).toBeVisible();
  //   expect(alertEl).toHaveText(`You've just taken your first step into a larger world.`);
  // });

  // it('ngOnInit should set grid data', () => {
  //   let userMock: User[] =  [{ firstname: 'Shikha', lastname: 'Ber', contact: '123', email: 'a@gmail.com', dob: '22-10-1996', address: 'abcd' }];
  //   let service: UserService = new UserService();
  //   spyOn(service, 'getUsers').and.returnValue(userMock);
  //   component.ngOnInit();
  //   fixture.whenStable()
  //   .then( () => {
  //       expect( component.gridD ).toEqual( userMock );
  //   });
  // });

});
