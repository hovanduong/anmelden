import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  isCaptchaValid=false;
  selected_option:string;
  siteKey:string;
  name:string;
  

  constructor( ) { 
    this.siteKey="6LdzyNkaAAAAAAKoajk8dIhNajo0db0nGR4oyeKf";
    
  
  }
  
  ngOnInit() {
  }
  getValues(val){
      console.warn(val);
  }

  updateName(){
    console.log(this.name);
  }
  optionChanged(){
    alert(this.selected_option)
  }

  ckeditorContent="Hello";
 
  captchaResolved(ev){
    console.log("Captcha resolved", ev);
    this.isCaptchaValid=true;
  }

}
