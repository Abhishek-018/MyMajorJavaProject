import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/utility/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id: any;
  category: any;

  constructor(private _fb: FormBuilder, private _categoryService: CategoryService, private _route: Router, private _activatedRoute: ActivatedRoute) { }

  //Activated Route is used to get the query params, get current URL.
  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    })
    
    this.category = this._categoryService.getCategoryById(this.id).subscribe((response: any) => (this.category = response));
    console.log(this.id);
    console.log(this.category);
  }

  editCategoryForm: FormGroup = this._fb.group({

    categoryName: ['']

  })

  editCategory() {
    this._categoryService.editCategory(this.id, this.editCategoryForm.value).subscribe(response => { console.log(response) });
    setTimeout(() => {
      this._route.navigate(['/viewCategory']);
    }, 1000);

  }

  cancel() {
    this._route.navigate(['/viewCategory']);
  }



}
