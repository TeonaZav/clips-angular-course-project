import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait!';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait!';
    this.alertColor = 'blue';
    this.inSubmission = true;

    console.log(this.credentials);
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (err) {
      console.error(err);

      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred!';
      this.alertColor = 'red';
      return;
    }
    this.alertMsg = 'You are successfully logged in';
    this.alertColor = 'green';
  }
}
