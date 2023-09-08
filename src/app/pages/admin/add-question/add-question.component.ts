import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {


  question:any={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };
  constructor(private _route:ActivatedRoute,private _question:QuestionService,private snack:MatSnackBar){}

  qId:any;
  qTitle:any;
  ngOnInit():void{
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz['qId'] = this.qId;

    

  }
  formSubmit(){

    if(this.question.content.trim() == '' || this.question.content==null){
      this.snack.open("Question cannot be left blank!",'',{duration:3000});
      return;
    }
    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      this.snack.open("Option 1 cannot be left blank!", '', { duration: 3000 });
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      this.snack.open("Option 2 cannot be left blank!", '', { duration: 3000 });
      return;
    }
    
    //submitting the form

    this._question.addQuestion(this.question).subscribe((data)=>{
      this.snack.open("Question Added!", '', { duration: 3000 });

        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
    
      

    },(error)=>{
      this.snack.open("Error adding question", '', { duration: 3000 });

    });

  }

}
