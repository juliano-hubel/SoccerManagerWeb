import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  providers: [DataService]  
})
export class StudentListComponent implements OnInit {
  public students: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getStudents().subscribe(result=>{ this.students =  result}, error => {});    
    //this.dataService.getStudents().subscribe(result=>{ console.log(result)}, error => {});    
    //console.log(this.students);
  }

}
