import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
