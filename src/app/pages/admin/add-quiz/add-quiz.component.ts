import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  constructor(private _cat:CategoryService,private snack:MatSnackBar,private _quiz:QuizService){

  }
  ngOnInit(){
    this._cat.categories().subscribe(
      (data)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        this.snack.open('Server Error','',{duration:3000});
      }
    );
  }

  quizData={
      title:'',
      description :'',
      maxmarks:'',
      numberOfQuestions :'',
      active: true,
      category: {
        cid:'',
      },

  }
  categories:any=[]


  addQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this.snack.open("Title Required",'',{duration:3000});
      return;
    }
    //call server

    this._quiz.addQuiz(this.quizData).subscribe((data)=>{
      this.snack.open("Success! Quiz Added",'',{duration:3000});
      this.quizData = {
        title: '',
        description: '',
        maxmarks: '',
        numberOfQuestions: '',
        active: true,
        category: {
          cid: '',
        },

      };
    },(error)=>{
      this.snack.open("Error Occured",'',{duration:3000});
    });
  }


   
}
