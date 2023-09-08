import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent  {
  qid:any;
  questions:any;

  marksGot=0;
  correctAnswers=0;
  attempted=0;

  isSubmit=false;

  timer:any;


  constructor(private locationSt: LocationStrategy, private _route: ActivatedRoute,private _question:QuestionService,private snack:MatSnackBar,private _login:LoginService) { }
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
  

  ngOnInit(){
    
    this.preventBackButton();
    this.qid= this._route.snapshot.params['qid'];
    this.loadQuestions();

  }
  loadQuestions(){
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe((data)=>{
        this.questions=data; 
        this.timer=this.questions.length*1*60;
        this.questions.forEach((q:any)=>{
          q['givenAnswer'] = '';
        });


    },(error)=>{
      alert("error");

    });

    this.startTimer();
  }

  submitQuiz(){
    
    this.snack.open("Are you sure?",'Yes',{duration:4000});

    this.isSubmit=true;


    this.marksGot = 0;
    this.correctAnswers = 0;
    this.attempted = 0;

    this.questions.forEach((q:any)=>{
      if(q.givenAnswer==q.answer){
        this.correctAnswers++;
        let markssingle=this.questions[0].quiz.maxmarks/this.questions.length

        this.marksGot+=markssingle;
        

        
      }
      if(q.givenAnswer != '' && q.givenAnswer!=null){
        this.attempted++;
      }
    });

    console.log("correct answers " + this.correctAnswers);
    this.snack.open("Marks Obtained: " + this.marksGot + " Correct Answers: " + this.correctAnswers +" Attempted: "+this.attempted, '', { duration: 10000 });
    // this._login.logout();
  }

  startTimer(){
    let t = window.setInterval(()=>{
      if(this.timer<=0){
        this.submitQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }
  printThis(){
    window.print();
  }
  getTimeInMinutes(){
    let mm =Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} min : ${ss} sec`;
  }

}
