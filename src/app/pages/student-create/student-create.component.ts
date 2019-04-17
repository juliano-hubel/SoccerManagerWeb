import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, Validator } from '@angular/forms';
import {DataService} from '../../services/data.service';
import{CustomValidator} from '../../validators/custom.validator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html'  ,
  providers: [DataService]
})
export class StudentCreateComponent implements OnInit {
  public form:FormGroup;
  

  constructor(public fb:FormBuilder, private dataService: DataService,private router:Router) { 
    this.form = this.fb.group({
      studentFirstName:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required        
      ])],
      studentLastName:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required        
      ])],
      email:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator        
      ])],
      studentRG:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required        
      ])],
      studentCPF:['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11)        
      ])],
      birthDate:['', Validators.compose([        
        Validators.required        
      ])],
      gender:['', Validators.compose([        
        Validators.required        
      ])],
      fatherFirstName:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required        
      ])],
      fatherLastName:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required        
      ])],
      fatherRG:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required        
      ])],
      fatherCPF:['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required                
      ])],
      motherFirstName:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required        
      ])],
      motherLastName:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required        
      ])],
      motherRG:['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required        
      ])],
      motherCPF:['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required                
      ])],
      paymentFee:['', Validators.compose([        
        Validators.required                
      ])],
      expirationFee:['', Validators.compose([        
        Validators.required                
      ])],
      notes:['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(500),                      
      ])]      
    })


  }

  ngOnInit() {
  }

  submit()
  {
     this.dataService.createStudent(this.form.value)
     .subscribe( result => {
       console.log(result);
       alert("sucesso");
       this.router.navigateByUrl('/alunos');
     }, error => {
       console.log(error)
     });     
     
  }
}
