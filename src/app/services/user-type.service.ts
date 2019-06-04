import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  user;
  user_type;
  password;
  constructor() { }

  set(user_type,user,password)
  {
    this.user_type=user_type;
    this.password=password;
    this.user=user;
  }
}
