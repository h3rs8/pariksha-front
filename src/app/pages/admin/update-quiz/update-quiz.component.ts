import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {

  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService,private snack:MatSnackBar,private _router:Router){

  }
  qId=0;
  quiz:any;
  categories:any;
  ngOnInit():void{
    this.qId= this._route.snapshot.params['qid'];
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe((data)=>{
      this.quiz=data;
      console.log(this.quiz);
    },(error)=>console.log(error));

    this._cat.categories().subscribe((data:any)=>{
      this.categories=data;
    },(error)=>{
      this.snack.open("Error Occured While Retreiving Categories",'',{duration:3000});
    } );
  }

  updateQuiz(){
    this._quiz.updateQuiz(this.quiz).subscribe((data) => {
      this.snack.open("Success! Quiz Updated", '', { duration: 3000 });
      this.quiz = {
        title: '',
        description: '',
        maxmarks: '',
        numberOfQuestions: '',
        active: true,
        category: {
          cid: '',
        },

      };
      this._router.navigate(['/admin/quizzes']);
    }, (error) => {
      this.snack.open("Error Occured", '', { duration: 3000 });
    });
  }
    
  

}
