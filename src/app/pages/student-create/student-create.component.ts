import { Component, OnInit, Renderer } from '@angular/core';
import { Validators, FormGroup, FormBuilder, Validator } from '@angular/forms';
import {DataService} from '../../services/data.service';
import{CustomValidator} from '../../validators/custom.validator';
import { Router } from '@angular/router';
import{ui} from '../../utils/ui';



@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html'  ,
  providers: [DataService, ui]
})
export class StudentCreateComponent implements OnInit {
  public form:FormGroup;
  

  constructor(public fb:FormBuilder, private dataService: DataService,private router:Router, private ui:ui,
    private renderer: Renderer) { 
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

  checkEmail()
  { 
    var emailInput = document.getElementById('emailInput');
    emailInput.classList.remove("is-danger")
    emailInput.classList.remove("is-success");
    this.ui.lock('emailControl');    
    document.getElementById('emailCheck').style.display="none";      
    document.getElementById('emailCheckFalse').style.display="none";      
    


    this.dataService.checkExistingEmail(this.form.controls['email'].value)
    .subscribe(result =>{
      this.ui.unlock('emailControl');
      if(!result.exists)
      {
        document.getElementById('emailCheck').style.display="";              
        emailInput.classList.add("is-success");
      }
      else  
      {
        document.getElementById('emailCheckFalse').style.display="";                  
        emailInput.classList.add("is-danger");
      }
    }, error=>{
        this.ui.unlock('emailControl');
        document.getElementById('emailCheckFalse').style.display="";      
        emailInput.classList.add("is-danger");
    });    
    
    
      
    
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
