import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidatorsService } from '../services/customvalidators.service';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  message='';
  
  isProcessing = false;
className=""


  constructor(private fb: FormBuilder, private customValidator: CustomvalidatorsService, private regservice: AuthservicesService,private _router:Router) { }
  registerForm = new FormGroup({

 
 
  

    //password:new FormControl('',Validators.compose([Validators.required, this.customValidator.patternValidator()])),
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/), Validators.maxLength(10)]),
    email1: new FormControl('', [Validators.required, Validators.email]),
    userrole: new FormControl('Buyer', Validators.required),
    password: new FormControl('', Validators.compose([Validators.required, this.customValidator.patternValidator()]))

  })

  ngOnInit(): void {

    
    }
    // onSubmit() {
    //   this.submitted = true;
    //   if (this.registerForm.valid) {
    //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    //     console.table(this.registerForm.value);
    //     this._router.navigate(['login'])
    //   }
  
    // }}


  
  onRegister() {
    console.log(this.message);
    this.isProcessing=true;
    this.submitted = true;
   
    let data = this.registerForm.value;
    //if (this.registerForm.valid) {
    //alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    //console.table(this.registerForm.value);
    this.regservice.registerData(data)
      .subscribe(
        res => {
        if(res.success){
          this.isProcessing=false;
          this.message='Account created'
          //alert("Account created")
          console.log(this.message)
          this.className='alert alert-success'
        }else 
        {
          this.isProcessing=false;
          
          this.message=res.message;
         //alert("Email id already exist or fields are empty")
          console.log(this.message);
          this.className='alert alert-danger'
        }
        },
        err => {
          this.isProcessing=false;
          this.message="Server Error";
      //alert("server error")
          this.className='alert alert-info'
        }
      )
    //}

  }
  getclassName(){
    return this.className;
  }
}
