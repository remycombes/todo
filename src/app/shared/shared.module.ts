import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatListModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatMenuModule
  ],
  exports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatMenuModule
  ],   
  declarations: []
})
export class SharedModule { }
