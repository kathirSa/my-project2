import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RestInterfaceService } from '../rest-interface.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
   
 response: any;
 username: String = 'koushikkothagal';

 onSubmit(data:any) {
  console.log(
               "Email: " + data.email + " -- "
             + "Password: " + data.passwd + " -- "
             + "gender: " + data.gender);
}

  
  constructor(private restSvc: RestInterfaceService, private httpcall: HttpClient) { 
    this.restSvc.printToConsole("call Rest-APIs")
  }

  //* Http- call*/
 

  ngOnInit(): void {
   
   this.httpcall.get('http://api.github.com/users/' + this.username)
   .subscribe((response) => {this.response = response;
                              console.log(this.response);});

  }

}
