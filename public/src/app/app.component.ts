import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userid: String;
  title = 'The Besties';

  constructor(private _httpService: HttpService, private _route:ActivatedRoute){}

  ngOnInit(){
  }
  clickLogin(){
    console.log("User clicked Login")
    let observable = this._httpService.loginUser(this.userid)
  }
}
