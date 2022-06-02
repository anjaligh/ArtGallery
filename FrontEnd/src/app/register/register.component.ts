import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { CustomvalidatorsService } from '../services/customvalidators.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;



 
  constructor(private fb:FormBuilder,private customValidator: CustomvalidatorsService){}
  registerForm=new FormGroup({
  
    //password:new FormControl('',Validators.compose([Validators.required, this.customValidator.patternValidator()])),
    name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/), Validators.maxLength(10)]),
    email1:new FormControl('',[Validators.required, Validators.email]),
    category:new FormControl('Buyer',Validators.required),
    password:new FormControl('',Validators.compose([Validators.required, this.customValidator.patternValidator()]))
  
    })

  ngOnInit(): void {
    
    }
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.registerForm.value);
        
      }
  
    }}

