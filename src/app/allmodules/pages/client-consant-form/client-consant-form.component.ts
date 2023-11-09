import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistService } from '../../../service/artist.service';

@Component({
  selector: 'app-client-consant-form',
  templateUrl: './client-consant-form.component.html',
  styleUrls: ['./client-consant-form.component.css'],
})
export class ClientConsantFormComponent implements OnInit {
  client_inital: any = '';
  name: any = '';
  isLoad: any = false;
  submitted: any = false;
  consantForm: any = [];
  consentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private actRoute: ActivatedRoute,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.consentForm = this.formBuilder.group({
      signature: ['', []],
      client_initial: ['', []],
      client_name: ['', []],
      term1: [true, []],
      term2: [true, []],
      address: ['', []],
      city: ['', []],
      state: ['', []],
      dob: ['', []],
      identification: ['', []],
      studio_name: ['', []],
    });
    this.consantformDetails();
  }

  consantformDetails() {
    this.isLoad = true;
    var formData: any = new FormData();
    formData.append('appointment_id', this.actRoute.snapshot.params.uuid);
    this.artistService.consantformDetailsClient(formData).subscribe(
      (res: any) => {
        this.consentForm.patchValue({ studio_name: res.studio_name });
        this.consentForm.patchValue({ client_name: res.client_name });
        this.consentForm.patchValue({ address: res.address });
        this.consentForm.patchValue({ city: res.city });
        this.consentForm.patchValue({ state: res.state });
        this.consentForm.patchValue({ identification: res.identification });
        this.consentForm.patchValue({ signature: res.signature });
        this.consentForm.patchValue({ dob: res.DOB });
        this.client_inital = res.client_initial;
        this.isLoad = false;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  disableDate() {
    return false;
  }
  back(): void {
    this.location.back();
  }
}
