import { Component  } from '@angular/core';
import {  FormControl, FormGroup, } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']


})


export class ContactComponent {

  msg: string = '';
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
          this.msg = 'Thank you your message was successfully sent!';
        },
        (error) => {
          this.validationForm.reset();
          this.msg = 'An error occurred during submission, please try again later!';
        }
      );
  }
}
