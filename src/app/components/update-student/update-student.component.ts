import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  years: number[] = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
  routeParamsId: number = 0;
  updateForm = this.fb.group({
    name: [''],
    email: [''],
    yearOfJoining: ['']
  })
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    
    this.routeParamsId = this.route.snapshot.params['id'];
    this.studentService.getStudentByID(this.routeParamsId).subscribe((result: any) => {
      this.updateForm = this.fb.group({
        name: [result['name']],
        email: [result['email']],
        yearOfJoining: [result['yearOfJoining']],
      });
    })
  }

  updateStudent() {
    this.studentService.updateStudent(this.updateForm.value, this.routeParamsId).subscribe(result => {
      this.router.navigate(['/list-student']);
    })
  }

}
