import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { 
    this.quizzes();
  }
  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //adding quiz
  public addQuiz(quiz:any){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //delete
  public deleteQuiz(qId:any){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);

  }
  //get single quiz

  public getQuiz(qId:any){
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  //update quiz
  public updateQuiz(quiz:any){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

  //get quizzes of category

  public getQuizzesOfCategory(cid:any){
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }
  public addResult(qid:any,result:any){
    return this._http.post(`${baseUrl}/quiz/${qid}/addresult`,result);
  }
  public getResult(qid:any){
    return this._http.get(`${baseUrl}/quiz/${qid}/getresult`);
  }
  public getResultOfUser(uid:any){
    return this._http.get(`${baseUrl}/quiz/getresultsofuser/${uid}`);
  }
}
