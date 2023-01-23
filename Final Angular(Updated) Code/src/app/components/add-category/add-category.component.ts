import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/utility/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  data:any;
  constructor(private _fb:FormBuilder, private _categoryService:CategoryService, private _route:Router) { }

  addCategory:FormGroup = this._fb.group({

    categoryName:['']
  });

  addEventCategory()
  {
    
    this._categoryService.addCategory(this.addCategory.value).subscribe(data => console.log(data));

    setTimeout(() => {
      this._route.navigate(['/viewCategory']);
    }, 1000);
    
  }

  ngOnInit(): void {
  }

  cancel(){
    this._route.navigate(['/viewCategory'])
  }

}
