import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    username: '',
    role: '',
    password: ''
  };

  onSubmit() {
    // Aquí irá la lógica para enviar los datos al backend
    console.log('Datos de registro:', this.registerData);
  }
}
