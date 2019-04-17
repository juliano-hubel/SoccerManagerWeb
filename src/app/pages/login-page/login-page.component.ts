import { Component, OnInit } from '@angular/core';
import{Validator, FormGroup, FormBuilder, Validators} from '@angular/forms';
import{CustomValidator} from '../../validators/custom.validator';
import{ui} from '../../utils/ui';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers:[ui, DataService]
})
export class LoginPageComponent implements OnInit {
public form: FormGroup;

  constructor(private fb: FormBuilder , private ui :ui, private dataService : DataService) {
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
    this.dataService.createUser(this.form.value);
  }

}
