import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalguardGuard } from './services/normalguard.guard';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/start/start.component';
import { QuizResultsComponent } from './pages/admin/quiz-results/quiz-results.component';
import { ForgotpassComponent } from './pages/forgotpass/forgotpass.component';
import { HistoryComponent } from './pages/user/history/history.component';
import { BackgroundComponent } from './pages/background/background.component';
import { ProfileChangeComponent } from './pages/profile-change/profile-change.component';
import { AdminprofileComponent } from './pages/adminprofile/adminprofile.component';

const routes: Routes = [
  {
    path:'',
    component:BackgroundComponent,
    pathMatch:"full",

  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:"full",

  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:"full",
    
  },
  {
    path:'login/forgot',
    component:ForgotpassComponent,
    pathMatch:"full",
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path: '',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:AdminprofileComponent,
        
        
      },
      {
        path:'change',
        component: ProfileChangeComponent,
        

      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component:AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'quiz/quizresults/:qid',
        component: QuizResultsComponent,
      },
      {
        path: 'view-questions/:id/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },


      

    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    
    canActivate:[normalguardGuard],
    children:[
      {
        path: 'history',
        component: HistoryComponent,
        
      },
      {
        path: 'profile',
        component: ProfileComponent,
        

      },
      {
        path: 'change',
        component: ProfileChangeComponent,
        

      },

      {
        path: ':catId',
        component: LoadQuizComponent,
      },
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,

      },
      
      
      
    ]
  },
  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate:[normalguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
