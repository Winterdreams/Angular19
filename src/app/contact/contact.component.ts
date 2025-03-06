import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { createInvalidDoaminValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDoaminValidator(['gmail.com', 'yahoo.com', 'hotmail.com'])

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]), //multiple validator as array
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitForm() {
    console.log(this.contactForm.valid);
  }
}
