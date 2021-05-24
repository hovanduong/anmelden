import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


get user(){
  return this.logintrationForm.get('user');
}

get password(){
  return this.logintrationForm.get('password');
}
get check(){
  return this.logintrationForm.get('check');
}

public errorMessages={
  user:[
    {type: 'required',message: ' Name is required'},
    {type: 'pattern',message: ' Please enter a valid email address!!'}
  ],
  password:[
    {type: 'required',message: ' Name is required'},
    {type: 'minLength',message: ' Name cant be logger more 6 characters'}
  ],
};

logintrationForm=this.formBuilder.group({
  user:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]],
  password:['',[Validators.required,Validators.minLength(6)]],
  check:['',Boolean]
});
  
    
  ngOnInit() {
  }
 


  public submit(){
      if(this.user.value ==""){
      alert("Please check user empty !!");
    }else if( this.password.value== ""){
      alert("Please check password empty !!");
    }else if(this.user.value == "admin@gmail.com" && this.password.value=="123456"){
      this.goToPost();
    }else{
      alert("Please check account again !! ");
    }
  }

  goToPost(){
    this.route.navigate(['/post']);
    
  }
  gotoRegister(){
    this.route.navigate(['/register'])
  }
  constructor(
     private route: Router,
     private formBuilder:FormBuilder
  ) {}

}
