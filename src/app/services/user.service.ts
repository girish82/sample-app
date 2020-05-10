
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
// import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'Girish',
        lastName: 'Prakash',
        email: 'girish@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      },
      {
        firstName: 'David',
        lastName: 'Johnson',
        email: 'david@yahoo.com',
        isActive: false,
        registered: new Date('03/03/2020 06:20:00'),
        hide: true
      },
      {
        firstName: 'George',
        lastName: 'Williams',
        email: 'george@gmaial.com',
        isActive: true,
        registered: new Date('11/02/2020 10:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'Brad'});
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
