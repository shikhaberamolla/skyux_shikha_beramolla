import { Injectable } from '@angular/core';
import * as users from '../../assets/userdata.json';
import { User } from '../models/User';
 @Injectable({
    providedIn: 'root'
 })
 export class UserService {
    public userList: User[] = (users as any).users;
    constructor() { }
    public addUser(user: User) {
        this.userList.push(user);
    }
    public getUsers() {
        return this.userList;
    }
 }
