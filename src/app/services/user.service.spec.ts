import {
    TestBed
} from '@angular/core/testing';
import {
    SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';
import { User } from '../models/User';
import { UserService } from './user.service';

  describe('User service', () => {
    let service: UserService;
    let mockUserList: User[] = [
       { firstname: 'Shikha', lastname: 'Ber', contact: '123', email: 'a@gmail.com', dob: '22-10-1996', address: 'abcd' }
    ];
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
        service = TestBed.inject(UserService);
      });

      it('getUsers should return user data', () => {
        service.userList = mockUserList;
        let res = service.getUsers();
        expect(res).toEqual(mockUserList);
      });

      it('addUser should add user data', () => {
        service.userList = [];
        service.addUser(mockUserList[0]);
        expect(service.userList).toEqual(mockUserList);
      });
  });
