import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataCompComponent } from './show-data-comp/show-data-comp.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {
    path:'courselist',component:ShowDataCompComponent
  },
  {
    path:'addcourse',component:AddCourseComponent
  },{
    path:'editcourse/:id',component:EditCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
