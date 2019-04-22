import { Component, OnInit } from '@angular/core';
import{Validator, FormGroup, FormBuilder, Validators} from '@angular/forms';
import{CustomValidator} from '../../validators/custom.validator';
import{ui} from '../../utils/ui';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers:[ui, DataService]
})
export class LoginPageComponent implements OnInit {
public form: FormGroup;
public errors:any[] = [];

  constructor(private fb: FormBuilder , private ui :ui, private dataService : DataService, private router:Router) {
      this.form = this.fb.group({
        email:['', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required, 
          CustomValidator.EmailValidator
        ])],
        password:['', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required
        ])]
      });
            
      var token = localStorage.getItem('soccermanager.token').toString();
      if(token)
      {
        this.router.navigateByUrl('/home');
      }

   }

  ngOnInit() {
    
  }

  checkEmail()
  { 
    this.ui.lock('emailControl');
    setTimeout(() => {
      this.ui.unlock('emailControl');
      console.log(this.form.controls['email'].value);
    }, 3000);    
  }

  openTermos()
  {
     document.getElementById("modalTermos").classList.add("is-active");
  }
  closeTermos()
  {
     document.getElementById("modalTermos").classList.remove("is-active");
  }

  submit()
  { 
      this.dataService
      .authenticate(this.form.value)
      .subscribe(result=>{
        localStorage.setItem('soccermanager.token', result.token);
        localStorage.setItem('soccermamager.user', JSON.stringify(result.user));
        this.router.navigateByUrl('/home');
        console.log(result);

      }, 
      error=>{
        this.errors = JSON.parse(error._body).errors;
      })
    
  }

}
