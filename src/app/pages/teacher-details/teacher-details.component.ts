import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  providers: [DataService]

})
export class TeacherDetailsComponent implements OnInit {
private teacher:any;
private teacherid: any;
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {


  }

  loadTeacher()
  {
    this.activatedRoute.params.subscribe(params => {
      this.teacherid =  params['id']; 
   });

   

  }



}
