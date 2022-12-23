import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StudentService } from './student.service';

fdescribe('StudentService', () => {
  let service: StudentService;
  let mockHttpClient: HttpClient;
  let mockStudent: any = [
    {
      "name": "Pramoda K Manjegowda",
      "email": "pramoda.k.manjegowda@accenture.com",
      "yearOfJoining": "2021",
      "id": 1
    },
    {
      "name": "Ganesh MK",
      "email": "ganesh@subex.com",
      "yearOfJoining": "2020",
      "id": 2
    },
    {
      "name": "Prajwal",
      "email": "prajwal@gmail.com",
      "yearOfJoining": "2014",
      "id": 3
    }
  ];

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(StudentService);
    service = new StudentService(mockHttpClient);
  });

  it('should return student records', () => {
    let response:[] = [];
    spyOn(service, 'getAllStudent').and.returnValue(of(mockStudent));
    service.getAllStudent().subscribe((res: any) => response = res);
    expect(response).toEqual(mockStudent);
  });

  it('should add student records', ()=> {
    let addStudent = {
      "name": "Nithin",
      "email": "nithin@gmail.com",
      "yearOfJoining": "2021",
      "id": 1
    };
    spyOn(service, 'addStudent').and.returnValue(of(addStudent));
    service.addStudent(addStudent).subscribe((res) => {
      mockStudent.push(res);
      console.log(mockStudent.length);
      console.log(mockStudent);
    });
    expect(mockStudent.length).toBe(3);
  });

  it('should delete student record based on id selection', ()=> {
    spyOn(service, 'deleteStudent').and.returnValue(of(mockStudent));
    service.deleteStudent(1).subscribe(res => {
      mockStudent.splice(res, 1);
      // console.log(mockStudent.length)
      expect(mockStudent.length).toEqual(2);
    })
  })
});
