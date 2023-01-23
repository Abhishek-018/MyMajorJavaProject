import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FeedbackService } from 'src/app/utility/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm:FormGroup = this._fb.group({
     //name:[''],
    rating:[''],
    feedbackDescription:['']

  })
  msg:any;
  constructor(private _fb:FormBuilder,private _feedbackService:FeedbackService,private dialogueRef:MatDialogRef<FeedbackFormComponent>) { }

  ngOnInit(): void {
  }
  addFeedback(){
    console.log(this.feedbackForm.value);
   
    this._feedbackService.addFeedback(this.feedbackForm.value).subscribe({
      next:(res)=>{
        alert("Feedback Added Successfully" );
        this.feedbackForm.reset();
        this.dialogueRef.close('save');
      },

      error:()=>{
        alert("Error while adding the feedback")
      }

    });
  }

 
}
