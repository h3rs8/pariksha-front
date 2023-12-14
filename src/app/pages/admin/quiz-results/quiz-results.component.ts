import { Component } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent {
  
  constructor(private _quiz:QuizService , private _route: ActivatedRoute){ }
  ngOnInit():void{
    
    this._quiz.getResult(this._route.snapshot.params['qid']).subscribe((data:any) =>{
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
