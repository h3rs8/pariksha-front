import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router){}
  user= {
  userName: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}
  hidden=false;
  formSubmit(){
    
    if (this.user.userName== '' || this.user.userName == null) {
      this.snack.open("Username Required!");
      this.hidden=true;
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data) =>{
        this.snack.open("Signup Success",'',{duration:3000});
        this.router.navigate(['login']);
      },
      (error)=>{
        this.snack.open("Username Already Exists Or Something Went Wrong",'',{duration:2000,verticalPosition:'top',horizontalPosition:'right'});      }
    );
  }

  

}
