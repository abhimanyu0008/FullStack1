import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {

update={
  id:0,
  discription:'',
  title:''
}
  constructor(private route:ActivatedRoute,
     private service:JavaServiceService,
    private r:Router){}
   newId:any
   ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      this.newId=params.get('id')
      this.getCourse()
    })
   
  }
  
course:any
  getCourse(){
    this.service.getCourse(this.newId).subscribe((data)=>{
      this.course=data
    })
  }
  updateCourse(){
    this.service.updateCourse(this.course).subscribe((data)=>{
      this.r.navigate(['/courselist'])
    })
  }
}
