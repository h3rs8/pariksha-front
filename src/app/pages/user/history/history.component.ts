import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  constructor(private _quiz:QuizService , private _route: ActivatedRoute,private _login:LoginService){ }
  ngOnInit():void{
    
    let username = this._login.getUser().userName;
    this._quiz.getResultOfUser(username).subscribe((data:any) =>{
      this.results=data;
      console.log(this.results);
    },
    (error:any)=>{
      console.log(error);
      
    }
    )
  };

  results:any=[]

}
