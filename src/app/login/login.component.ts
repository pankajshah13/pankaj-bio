import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    userName: '',
    password: null
  }  
  constructor( private router: Router) {
    
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.user.userName === 'pankaj' && Number(this.user.password)===131313) {
      this.router.navigate(['/home']);
    } else {
      alert('username password is invalid');
    }
console.log( this.user);

  }
}
