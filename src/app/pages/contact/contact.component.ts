import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    })
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('¡Formulario enviado!', this.contactForm.value);
      alert('¡Formulario enviado!');
      this.contactForm.reset();  // Limpia el formulario después de enviarlo
    } else {
      const invalidFields: string[] = [];
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        if (control?.invalid) {
          invalidFields.push(field);
          control.markAsTouched();  // Marca los campos como "tocados" para mostrar errores en la UI
        }
      });
      alert(`Formulario inválido. Por favor, revisa los siguientes campos: ${invalidFields.join(', ')}`);
    }
  }

}
  
