import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  

  constructor(private login:LoginService,private router:Router,private snack:MatSnackBar){
    
  }
  
  user:any = null;
  ngDoCheck():void{
    
    this.user = this.login.getUser();

  }
  
  public logOut(){
    this.login.logout();
    this.router.navigate(['/login']);
    console.log('logoutclicked');
    this.user= null;
    this.snack.open('Log Out Success!','',{duration:3000});
    
    
  }
  public isLoggedIn(){
    return this.login.isLoggedIn();
  }

}
