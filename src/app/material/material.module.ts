import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const Materials = [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule, 
  ReactiveFormsModule,
  MatTableModule,
  MatPaginatorModule
]

@NgModule({
  exports:[Materials],
  imports: [Materials]
})
export class MaterialModule { }

