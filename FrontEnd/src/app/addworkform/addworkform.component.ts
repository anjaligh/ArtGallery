import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addworkform',
  templateUrl: './addworkform.component.html',
  styleUrls: ['./addworkform.component.css']
})
export class AddworkformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  addWorkForm=this.fb.group({
    name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}/)]),
    contact:new FormControl('',[Validators.required,Validators.pattern(/^([0-9]{3})([-. ]?)([0-9]{3})([-. ]?)([0-9]{4})$/), Validators.maxLength(12)]),
    address:new FormControl('',[Validators.required]),
    paintingname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    category:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

}
