import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {
  catId: any;
  quizzes: any;
  constructor(private _route: ActivatedRoute, private _quiz: QuizService, private _snack: MatSnackBar) {


  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.catId = params['catId'];

      if (this.catId == 0) {
        this._quiz.quizzes().subscribe((data) => {
          this.quizzes = data;
          this.quizzes = this.quizzes.filter((quiz: any) => quiz.active == true);


        }, (error) => {
          this._snack.open('Error occured while loading all quizzes!', '', { duration: 3000 });

        });
      } else {
        this._quiz.getQuizzesOfCategory(this.catId).subscribe((data) => {
          this.quizzes = data;
          this.quizzes = this.quizzes.filter((quiz: any) => quiz.active == true);
        }, (error) => {

          alert("error in loading quiz data");
        });

      }

    })

    


  }

}
