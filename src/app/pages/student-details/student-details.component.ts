import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Route, Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  providers: [DataService]
})
export class StudentDetailsComponent implements OnInit {
  public student: any = {};
  public studentId: any = {};
  
  constructor(private dataService: DataService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

   this.activatedRoute.params.subscribe(params => {
      this.studentId =  params['id']; 
   });
    
    this.dataService.getStudent(this.studentId).subscribe(
      result => {this.student = result}, 
      error => { });         
  }
}
