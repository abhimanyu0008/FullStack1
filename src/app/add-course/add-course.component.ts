import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JavaServiceService } from '../java-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  course={
    id:0,
    title:'',
    description:''
  }
  constructor(private service:JavaServiceService, private router:Router) { }

  onSubmit(){
    this.service.addCourse(this.course).subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['/courselist'])
    })
  }
    
}
