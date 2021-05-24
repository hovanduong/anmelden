import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  isCaptchaValid=false;

  constructor() { }

  ngOnInit() {
  }
  get siteKey(){
    return environment.recaptcha.siteKey;
  }
  captchaResolved(ev){
    console.log("Captcha resolved", ev);
    this.isCaptchaValid=true;
  }

}
