import { Component  } from '@angular/core';
import {  FormControl, FormGroup, } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']


})


export class ContactComponent {


  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    });
  }


  onSubmit(e: Event): void {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_58mft2p',
        'template_dhvckrb',
        e.target as HTMLFormElement,
        'AmnMprCMW3riak6qR'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.validationForm.reset();
        },
        (error) => {
          this.validationForm.reset();
        }
      );
  }
}
