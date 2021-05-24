import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.page.html',
  styleUrls: ['./sigup.page.scss'],
})
export class SigupPage implements OnInit {

 

get firstName(){
  return this.sigUptrationForm.get('firstName');
}

get lastName(){
  return this.sigUptrationForm.get('lastName');
}
get email(){
  return this.sigUptrationForm.get('email');
}
get userName(){
return this.sigUptrationForm.get('userName');
}
get password(){
  return this.sigUptrationForm.get('password');
}
get confirmPassword(){
  return this.sigUptrationForm.get('confirmPassword');
}



public errorMessages={
  firstName:[
    {type: 'required',message: ' Name is required'},
  ],

  lastName:[
    {type: 'required',message: ' Name is required'},
  ],

  email:[
    {type: 'required',message: ' Name is required'},
    {type: 'pattern',message: ' Please enter a valid email address!!'}
  ],
  userName:[
    {type: 'required',message: ' Name is required'},
  ],
  password:[
    {type: 'required',message: ' Name is required'},
    {type: 'minLength',message: ' Name cant be logger more 6 characters'}
  ],
  confirmPassword:[
    {type: 'required',message: ' Name is required'},
    {type: 'minLength',message: ' Name cant be logger more 6 characters'}
  ],
};

sigUptrationForm=this.formBuilder.group({
  firstName:['',[Validators.required]],
  lastName:['',[Validators.required,Validators.minLength(6)]],
  email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")]],
  userName:['',Validators.required],
  password:['',Validators.required],
  confirmPassword:['',Validators.required],

  
});
  
    
  ngOnInit() {
    
  }
   
  
  // validateEmail(email) {
  //   const re = "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
  //   if(email.value.pattern(re) ){
  //     return false;
  //   }
  //     return true;
  // }
// checkpassword(password){
//   if(password.Lengt < 6 ){
//     return false;
//   }
//   return true;
// }
 
  
   public submit(){
    var firstName=this.firstName.value;
    var lastName=this.lastName.value;
    var email=this.email.value;
    var userName=this.userName.value;
    var password=this.password.value;
    var confirmPassword=this.confirmPassword.value;
    var root = {};
    // var email=
     if(firstName == ""){
       alert("FirstName Empty !!");
     }else if(lastName == ""){
      alert("LastName Empty !!");
     }else if(email == ""){
      alert("Email Empty !!");
     }else if(userName == ""){
      alert("UserName Empty !!");
     }else if(password == ""){
      alert("Password Empty !!");
    }else if(password.length<6){
      alert("Password  must be more than 6 characters !!");
    }else if(confirmPassword == ""){
      alert("Confirm Password Empty !!");
     }else if(!(password == confirmPassword)){
      alert("Please Check Password And Confirm Password!!");
    }else{
      alert("Succelfull");
      console.log(this.sigUptrationForm.value);
      //  root['registrien'].push({firstName:firstName, texlastNamet: lastName,email:email,userName:userName,password:password,confirmPassword:confirmPassword, timestamp: 1435862483093});
      // root["d"].push({a:'a'});
      root["a"].push({a:'aaaa'});
       console.log(JSON.stringify(root));
      }
  }

  constructor(
     private formBuilder:FormBuilder
  ) {
  }


}
