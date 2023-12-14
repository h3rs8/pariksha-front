import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  user:any = null;

  constructor(private login:LoginService){}

  ngOnInit():void{
    this.user=this.login.getUser();

  }
}
