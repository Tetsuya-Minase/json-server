import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './component/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoutingModule } from './edit-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditRoutingModule,
    MatSlideToggleModule
  ]
})
export class EditModule { }
