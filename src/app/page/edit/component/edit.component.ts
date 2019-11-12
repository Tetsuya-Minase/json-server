import { Component, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';
import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  readonly formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    rawData: new FormControl('', [])
  });
  isRawData = false;

  constructor() {
  }

  ngOnInit() {
    console.log('edit component');
  }

  changeSlideToggle(event: MatSlideToggleChange) {
    this.isRawData = event.checked;
  }

  private jsonValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      try {
        JSON.parse(control.value);
        return null;
      } catch (ex) {
        return { message: control.value };
      }
    };
  }

  get name() {
    return this.formGroup.get('name');
  }

  get rawData() {
    return this.formGroup.get('rawData');
  }
}
