import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/utility/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {


  categories: any;
  //data: any;


  displayedColumns: string[] = ['categoryId', 'categoryName', 'action'];
  constructor(private _categoryService: CategoryService, private _router: Router) { }

  ngOnInit(): void {

    this._categoryService.getData().subscribe((data: any) => { console.log(data); this.categories = data });

  }

  getCategoryById(categoryId: number) {
    this._categoryService.getCategoryById(categoryId).subscribe(data => { console.log(data) });
    this._router.navigate(['/edit/' + categoryId]);
  }

  deleteCategory(categoryId: number) {
    if (confirm('Are you sure you want to delete record?')) {
      this._categoryService.deleteCategory(categoryId).subscribe(data => { console.log(data) });
      alert("Record Deleted Successfully")
      location.reload();
    }
    else {
      location.reload();
    }

  }

}
