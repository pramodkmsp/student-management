import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  years: number[] = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
  studentForm!: FormGroup;
  display: boolean = false;
  message: string = '';

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      yearOfJoining: ['', Validators.required]
    });
    this.studentService.getAllStudent().subscribe(result => {
      console.log(result);
    })
  }

  addStudent() {
    this.studentService.addStudent(this.studentForm.value).subscribe(result => {
      this.message = "Student Registered Successfully!";
      this.display = true;
      this.studentForm.reset();
      setTimeout(()=> {
        this.display = false;
      }, 3500);
    })
  }

  hideDiv() {
    this.display = false;
  }

}
