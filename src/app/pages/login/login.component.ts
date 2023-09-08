import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }
  loginData={
    username:'',
    password:''
  }
  formSubmit(){
    console.log("login button clicked");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open("Username is Required!",'',{duration:3000});
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("Password is Required!", '', { duration: 3000 });
      return;
    }
    //now we request server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        //login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user)=>{
            this.login.setUser(user);
            console.log(user);
            //redirecting to ADMIN OR USER

            if(this.login.getUserRole()=='ADMIN'){
              // ADMIN
              // window.location.href='/admin';
              this.router.navigate(['admin']);

            }else if(this.login.getUserRole()=='NORMAL')
            {
              //NORMAL USER
              // window.location.href='/user-dashboard';
              this.router.navigate(['user-dashboard/0']);
            }
            else {
              this.login.logout();
              
            }
          }
          
        );
      },
      (error)=>{
        console.log('error'); 
        console.log(error);
        this.snack.open("Invalid Details",'',{duration:3000});
      }
    );

  }
  
  ngOnInit(): void {
      
  }
  

}
