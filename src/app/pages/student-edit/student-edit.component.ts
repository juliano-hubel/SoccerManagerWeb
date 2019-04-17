import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, Validator, FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { CustomValidator } from '../../validators/custom.validator';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  providers: [DataService]
})
export class StudentEditComponent implements OnInit {
  public form: FormGroup;
  studentId: any;
  student: any;

  constructor(public fb: FormBuilder, private dataService: DataService,
    private activatedRoute: ActivatedRoute, private router:Router) {
    this.BuildForm();


  }


  ngOnInit() {

    this.LoadStudent();
  }

  private LoadStudent() {
    this.activatedRoute.params.subscribe(params => {
      this.studentId = params['id'];
    });

    this.dataService.getStudent(this.studentId).subscribe(
      result => { this.student = result 
        console.log(this.student);
        this.FillForm(this.student);
      },
      error => { });      
  }
  private FillForm(student: any) {  
      this.form.controls["id"].setValue(this.student.id);
      this.form.controls["studentFirstName"].setValue(this.student.studentFirstName);
      this.form.controls["studentLastName"].setValue(this.student.studentLastName);
      this.form.controls["studentRG"].setValue(this.student.studentRG);
      this.form.controls["studentCPF"].setValue(this.student.studentCPF);
      this.form.controls["email"].setValue(this.student.email);
      this.form.controls["birthDate"].setValue(new Date(this.student.birthDate).toISOString().substring(0,10));
      this.form.controls["gender"].setValue(this.student.gender.toString());
      this.form.controls["fatherFirstName"].setValue(this.student.fatherFirstName);
      this.form.controls["fatherLastName"].setValue(this.student.fatherLastName);
      this.form.controls["fatherRG"].setValue(this.student.fatherRG);
      this.form.controls["fatherCPF"].setValue(this.student.fatherCPF);
      this.form.controls["motherFirstName"].setValue(this.student.motherFirstName);
      this.form.controls["motherLastName"].setValue(this.student.motherLastName);
      this.form.controls["motherRG"].setValue(this.student.motherRG);
      this.form.controls["motherCPF"].setValue(this.student.motherCPF);
      this.form.controls["paymentFee"].setValue(this.student.paymentFee);
      this.form.controls["expirationFee"].setValue(this.student.paymentExpirationDay);    
      this.form.controls["notes"].setValue(this.student.notes);    
  }

  submit() {
    this.dataService.updateStudent(this.form.value).subscribe(
      result =>{
        console.log(result);
        alert('sucesso'),
        this.router.navigateByUrl('/alunos');
      },
      error =>{
        console.log(error);
      }      
    );
    
  }

  private BuildForm() {
    this.form = this.fb.group({
      id: [''],
      studentFirstName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      studentLastName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      studentRG: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required
      ])],
      studentCPF: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11)
      ])],
      birthDate: ['', Validators.compose([
        Validators.required
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])],
      fatherFirstName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      fatherLastName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      fatherRG: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required
      ])],
      fatherCPF: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      motherFirstName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      motherLastName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      motherRG: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.required
      ])],
      motherCPF: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      paymentFee: ['', Validators.compose([
        Validators.required
      ])],
      expirationFee: ['', Validators.compose([
        Validators.required
      ])],
      notes: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(500),
      ])]
    });
  }

}
