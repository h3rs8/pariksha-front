import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {


  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router,private _user:UserService) { }
  loginData={
    userName:'',
    forgot1:'',
    forgot2:'',
    password:''
  }
  formSubmit(){
    console.log("login button clicked");
    if(this.loginData.userName.trim()=='' || this.loginData.userName==null){
      this.snack.open("Username is Required!",'',{duration:3000});
      return;
    }
    if (this.loginData.forgot1.trim() == '' || this.loginData.forgot1 == null) {
      this.snack.open("Answer is Required!", '', { duration: 3000 });
      return;
    }
    if (this.loginData.forgot2.trim() == '' || this.loginData.forgot2 == null) {
      this.snack.open("Answer is Required!", '', { duration: 3000 });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("Password is Required!", '', { duration: 3000 });
      return;
    }
    this._user.forgot(this.loginData).subscribe((data)=>{
      this.snack.open("Password changed Successfully", '', { duration: 3000 });
    },(error=>{
      this.snack.open("Wrong Details !!", '', { duration: 3000 });
    }))

    

  }
  
  ngOnInit(): void {
      
  }

}
