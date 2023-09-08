import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private _category:CategoryService, private snack:MatSnackBar){}
  category:any={
    title:'',
    description:'',
  };

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this.snack.open("Title cannot be left blank",'',{duration:3000});
      return;
    }


    this._category.addCategory(this.category).subscribe(
      (data)=>{
        this.snack.open("Category added Successfully",'',{duration:3000});
        this.category.title='';
        this.category.description='';

      },
      (error)=>{
        this.snack.open("Server Error", '', { duration: 3000 });

      }
    );
  }

  
}
