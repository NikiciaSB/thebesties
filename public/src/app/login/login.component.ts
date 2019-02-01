import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuser: any;
  userid: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.loginuser = { username: "", password: "" }
    this._route.params.subscribe((params) => {
      console.log("Params Id", params['id'])
      this.userid = params['id']
    })
  }

  onLogin() {
    console.log("--------login component line 25-----------")
    this._httpService.loginUser(this.loginuser).subscribe(data => {
      this.loginuser = { username: "", password: "" }
      if (data['message'] == "Error") {
        alert(data['message'])
      } else {
        console.log("--------login component line 31-----------")
      }
    });
  }

}
