import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpService } from '../http.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newUser = { first_name: "", last_name: "", email: "", passowrd: "", confirm_password: "" }
  }

  onRegister() {
    this._httpService.createUser(this.newUser).subscribe(data => {
      this.newUser = { first_name: "", last_name: "", username: "", email: "", passowrd: "", confirm_password: "" }
      console.log("Successfully added a new user", data)
      console.log("The Registration Errors", data['errors']['message'])
      alert(data['errors']['message'])
      this._router.navigate(['main'])

    });
  }

}
