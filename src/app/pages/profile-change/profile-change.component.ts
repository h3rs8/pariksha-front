import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.css']
})
export class ProfileChangeComponent {
  constructor(private _user:UserService,private snack:MatSnackBar,private _login:LoginService,private _route:Router){}
  userdata={
    userName:this._login.getUser()['userName'],
    email:'',
    phone:''
    
  }

  formSubmit(){
    this._user.update(this.userdata).subscribe((data)=>{
      this.snack.open("Success",'',{duration:3000});
    },(error)=>{
      this.snack.open("Error Occured",'',{duration:3000});
    })
    this._login.logout();

    this._route.navigate(['login']);
  }

}
