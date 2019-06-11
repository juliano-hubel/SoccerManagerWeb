import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'app/models/teacher.model';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  providers: [DataService]

})
export class TeacherDetailsComponent implements OnInit {
private teacher:Teacher;
private teacherid: string;
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
     this.loadTeacher();
  }

  loadTeacher()
  {
    this.activatedRoute.params.subscribe(params => {
      this.teacherid =  params['id']; 
      
    this.dataService.getTeacher(this.teacherid)
    .subscribe(
      (result:Teacher) => this.teacher = result, 
      (error:any) => console.log(error));  
   });

    

  }



}
