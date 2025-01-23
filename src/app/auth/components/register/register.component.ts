import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Inyectamos el servicio AuthService de auth.service.ts
  private authService : AuthService = inject(AuthService)

  // Datos del formulario: se vinculan con el HTML a través de [(ngModel)]
  // Public= público html
  public userForm = {
    //Ponemos atributos que son string (vacios)
    username: '',
    role: '',
    password: ''
  }


  handleRegisterForm() {
    // 1 VALIDACION
    const userFormValues = Object.values(this.userForm)

  if(userFormValues.includes('')) {
    alert('Todos los campos son obligatorios')
    return
  }
  // 2 LLAMAR SERVICIO REGISTRAR USUARIO
  // Suscribir: escuchar al servidor y recibir la respuesta
  // 
  this.authService.register(this.userForm).subscribe({
    next: (data: any) =>{
      console.log(data)
    },
    error: (error) =>{
      alert('Error al registrar el usuario')
      console.log(error)
    }
  })
}

}