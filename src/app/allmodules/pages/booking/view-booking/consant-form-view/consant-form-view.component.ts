import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-consant-form-view',
  templateUrl: './consant-form-view.component.html',
  styleUrls: ['./consant-form-view.component.css'],
})
export class ConsantFormViewComponent implements OnInit {
  constant_form_date: any = '';
  constant_form_name: any = '';
  checkDelete: any = false;
  consentForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ConsantFormViewComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    this.constant_form_date = data.constant_form_date;
    this.constant_form_name = data.constant_form_name;
    this.checkDelete = false;
    dialogRef.disableClose = false;
  }

  ngOnInit(): void {
    this.consentForm = this.formBuilder.group({
      name: [this.constant_form_name, [Validators.required]],
      date: [this.constant_form_date, [Validators.required]],
      term: [true, [Validators.required, Validators.requiredTrue]],
    });
  }
}
