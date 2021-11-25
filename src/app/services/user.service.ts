import { Injectable } from '@angular/core';import { User } from '../models/User';
import {users} from '../../assets/userdata.json';
 @Injectable({ 
    providedIn: 'root', 
 })
 export class UserService { 
    userlist:User[] = users;
    constructor() { } 
    addUser(user:User){
        debugger;
        this.userlist.push(user);
    }
    getUsers(){
        return this.userlist;
    }
 }