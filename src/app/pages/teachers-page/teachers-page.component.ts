import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  providers: [DataService]
})
export class TeachersPageComponent implements OnInit { 
teachers:any[] = [];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadTeachers();
  }


  private loadTeachers() {
    this.dataService.getTeachers().subscribe(result => {
      this.teachers = result;
    }, error => {
      console.log(error);
    });
  }
}
