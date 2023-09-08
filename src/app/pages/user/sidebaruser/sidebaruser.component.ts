import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.css']
})
export class SidebaruserComponent {
  categories:any;
  constructor(private _cat:CategoryService,private snack:MatSnackBar){}

  ngOnInit(){

    this._cat.categories().subscribe((data)=>{
      this.categories=data;
    },(error)=>{
      this.snack.open("Error loading categories from Server",'',{duration:3000});
    });
  }

}
