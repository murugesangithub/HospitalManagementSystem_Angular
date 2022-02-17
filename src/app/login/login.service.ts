import { Injectable } from '@angular/core';
import { Login } from './login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { } 
  formData:Login = new Login();
}
