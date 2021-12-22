import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
 @Injectable({
    providedIn: 'root'
 })
 export class UserService {

    //private static id:number;
   
    constructor(private http:HttpClient) { 
        
    }
    // public getId(){
    //     return this.http.get('http://localhost:3000/id')
    // }
    public addUser(user: User) {
        return this.http.post('http://localhost:3000/users',user);
    }
    public getUsers() {
        return this.http.get<User[]>('http://localhost:3000/users');
    }
    public updateUser(user:User){
        return this.http.put('http://localhost:3000/users/'+user.id,user);
    }
    public deleteUser(userid:number){
        return this.http.delete('http://localhost:3000/users/'+userid);
    }
    public setModalData(user:User){
        localStorage.setItem('editModalValue',JSON.stringify(user));
    }
    public getModalData(){
        return localStorage.getItem('editModalValue');
    }
 }
