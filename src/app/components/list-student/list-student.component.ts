import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  listOfStudents: any[] = [];
  filteredStudents: any[] = [];
  display: boolean = false;
  message: string = '';
  searchInput: string = '';
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudent().subscribe((result: any) => {
      this.listOfStudents = result;
      this.filteredStudents = this.listOfStudents;
    })
  }

  searchStudentRecords(value: any) {
    if(value && value.length > 0) {
      this.filteredStudents = this.listOfStudents.filter(student => {
        return student.name.toLowerCase().includes(value.toLowerCase()) ||
          student.email.toLowerCase().includes(value.toLowerCase()) ||
          student.yearOfJoining.toLowerCase().includes(value.toLowerCase())
      });
    } else {
      this.getAllStudents();
    }
  }

  deleteStudentByID(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.studentService.deleteStudent(id).subscribe(result => {
        this.message = "Record deleted Successfully!";
        this.display = true;
        this.getAllStudents();
        setTimeout(() => {
          this.display = false;
        }, 3500);
      })
    } else {
      this.getAllStudents();
    }
  }

}
