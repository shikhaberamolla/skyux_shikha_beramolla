import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { API_URL } from '../shared/toekns';
 @Injectable({
    providedIn: 'root'
 })
 export class UserService {

    //private static id:number;
   
    constructor(private http:HttpClient,  @Inject(API_URL) public ApiUrl: String,) { 
        
    }
    // public getId(){
    //     return this.http.get('http://localhost:3000/id')
    // }
    public addUser(user: User) {
        return this.http.post(this.ApiUrl + 'users',user);
    }
    public getUsers() {
        return this.http.get<User[]>(this.ApiUrl + 'users');
    }
    public updateUser(user:User){
        return this.http.put(this.ApiUrl + 'users/' + user.id,user);
    }
    public deleteUser(userid:number){
        return this.http.delete(this.ApiUrl + 'users/' + userid);
    }
    public setModalData(user:User){
        localStorage.setItem('editModalValue',JSON.stringify(user));
    }
    public getModalData(){
        return localStorage.getItem('editModalValue');
    }
    public setAdminName(uname:string){
        sessionStorage.setItem('uname',uname);
    }
    public isAdmin(){
        if(sessionStorage.getItem('uname') === 'Shikha')
            return true;
        return false;
    }
 }
