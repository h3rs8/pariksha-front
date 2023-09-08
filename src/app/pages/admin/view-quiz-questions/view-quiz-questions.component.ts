import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent {
  qId:any;
  qTitle:any;
  questions:any=[];
  constructor(private _route:ActivatedRoute,private _question:QuestionService,private snack:MatSnackBar){}

  ngOnInit(){
    this.qId = this._route.snapshot.params['id'];
    this.qTitle = this._route.snapshot.params['title'];
    console.log("the qid is :"+this.qId);
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data)=>{
      console.log(data);
      this.questions=data;
    },(error)=>{
      console.log(error);
    })
    console.log(this.qId);
    console.log(this.qTitle);
  }
  deleteQuestion(qid:any){
    

    this._question.deleteQuestion(qid).subscribe((data)=>{
      this.snack.open('Deletion Successfull','',{duration:3000});
      this.questions=this.questions.filter((question:any)=>question.quesId!=qid);
    },(error)=>{
      this.snack.open('Error while Deletion', '', { duration: 3000 });
    });


  }

}
