import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  providers: [DataService]
})
export class StudentListComponent implements OnInit {
  public students: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadStudents();
  }

  deleteStudent(id: any) {
    this.dataService.deleteStudent(id).subscribe(
      result => {
        alert('Excluido com sucesso');
        this.loadStudents();
      },
      error => {
        alert(error.message)
      });
  }
  loadStudents() {
    this.dataService.getStudents().subscribe(result => { this.students = result }, error => {console.log(error) });
  }

}
