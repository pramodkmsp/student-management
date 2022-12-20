import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentDetailsComponent } from './components/view-student-details/view-student-details.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-student', component: ListStudentComponent},
  { path: 'view-student/:id', component: ViewStudentDetailsComponent},
  { path: 'edit-student/:id', component: UpdateStudentComponent},
  { path:'**', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
