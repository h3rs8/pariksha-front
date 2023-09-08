import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {
  constructor(private _quiz:QuizService,private snack:MatSnackBar){

  }
  ngOnInit():void{
    this._quiz.quizzes().subscribe(
      (data)=>{
        this.quizzes=data;
        console.log(this.quizzes);
        
      },
      (error)=>{
        console.log(error);
        this.snack.open('Error loading data','',{duration:3000});
      }
    );
  }

  quizzes:any =[]


  //delete
  deleteQuiz(id:any){
    console.log("id to be deleted is "+id);
    this._quiz.deleteQuiz(id).subscribe((data)=>{
      this.quizzes =this.quizzes.filter((quiz:any)=>quiz.qId!=id);
      this.snack.open("Quiz Deleted Successfully!")
    },(error)=>{
      this.snack.open("Error during Deletion!")
    });
  }

}
