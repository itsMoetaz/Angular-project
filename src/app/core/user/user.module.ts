import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { HomeComponent } from 'src/app/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
