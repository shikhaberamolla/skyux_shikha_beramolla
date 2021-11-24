import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { AddDetailsComponent } from './add-details.component';

describe('Add details component', () => {
  let component: AddDetailsComponent;
  let fixture: ComponentFixture<AddDetailsComponent>;
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('onSubmit should add new data', () => {
    let userMock: User =  { firstname: 'Shikha', lastname: 'Ber',
    contact: '123', email: 'a@gmail.com', dob: '22-10-1996', address: 'abcd' };
    let service: UserService = new UserService();
    let myForm: any = {
      value: {
        fname: userMock.firstname, lname: userMock.lastname,
        contact: userMock.contact, email: userMock.email, dob: userMock.dob,
        address: userMock.address
      }
    };
    spyOn(service, 'addUser');
    spyOn(component, 'reset');
    component.onSubmit(myForm);
    fixture.whenStable()
    .then( () => {
        expect( service.addUser ).toHaveBeenCalled();
        expect(component.reset).toHaveBeenCalled();
    });
  });

  it('Submit button should call the onSubmit method', () => {
    spyOn(component, 'onSubmit');
    let el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    fixture.whenStable()
    .then( () => {
        expect( component.onSubmit ).toHaveBeenCalled();
    });
  });

  it('reset should call resetForm', () => {
    let myForm: NgForm = new NgForm([], []);
    spyOn(myForm, 'resetForm');
    component.reset(myForm);
    expect(myForm.resetForm).toHaveBeenCalled();
  });

  it('Form should be invalid', () => {
    debugger;
    fixture.debugElement.query(By.css('#first-name')).nativeElement.value = '';
    fixture.debugElement.query(By.css('#last-name')).nativeElement.value = '';
    fixture.debugElement.query(By.css('#contact')).nativeElement.value = '';
    fixture.debugElement.query(By.css('#email')).nativeElement.value = '';
    fixture.debugElement.query(By.css('#dob')).nativeElement.value = '';
    fixture.debugElement.query(By.css('#address')).nativeElement.value = '';
    let elt = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.whenStable().then(()=>{
      expect(elt.form.invalid).toBeTruthy();
    });  
  });

  it('Form should be valid button', () => {
    debugger;
    fixture.debugElement.query(By.css('#first-name')).nativeElement.value = 'abc';
    fixture.debugElement.query(By.css('#last-name')).nativeElement.value = 'xyz';
    fixture.debugElement.query(By.css('#contact')).nativeElement.value = '1234567890';
    fixture.debugElement.query(By.css('#email')).nativeElement.value = 'a@gmail.com';
    fixture.debugElement.query(By.css('#dob')).nativeElement.value = '22-09-1998';
    fixture.debugElement.query(By.css('#address')).nativeElement.value = 'abcdef';
    let elt = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.whenStable().then(()=>{
      expect(elt.form.invalid).toBeFalsy();
    });  
  });
});
