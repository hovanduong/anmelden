import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigupPageRoutingModule } from './sigup-routing.module';

import { SigupPage } from './sigup.page';

import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigupPageRoutingModule,
    ReactiveFormsModule,
    InputModule
    
  ],
  declarations: [SigupPage]
})
export class SigupPageModule {}
