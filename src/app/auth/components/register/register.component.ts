import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // 3 ENVIAR DATOS BACK
  // 3.1 Variable FormData para enviar datos
  private userFormData: FormData =new FormData()

  // Inyectamos Router para redireccionar al login después registro ok
  private router = inject(Router);

  // Inyectamos el servicio AuthService de auth.service.ts
  private authService : AuthService = inject(AuthService)

   // 2 LLAMAR SERVICIO REGISTRAR USUARIO
  // Datos del formulario: se vinculan con el HTML a través de [(ngModel)]
  // Public= público html
  public userForm = {
    //Ponemos atributos que son string (vacios)
    username: '',
    completeName: '', // Añadimos el nuevo campo
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

    // 3 ENVIAR DATOS BACK userFormData
    this.userFormData.append('username', this.userForm.username)
    this.userFormData.append('completeName', this.userForm.completeName) // Añadimos el nuevo campo
    this.userFormData.append('role', this.userForm.role)
    this.userFormData.append('password', this.userForm.password)


  // 2 LLAMAR SERVICIO REGISTRAR USUARIO
  // Suscribir: escuchar al servidor y recibir la respuesta
  this.authService.register(this.userForm).subscribe({
    next: (data: any) =>{
      // 1. Primero muestra una ventana emergente con este mensaje
      alert('Usuario registrado correctamente. Redirigiendo al login...');
      console.log(data);
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 1500); //2-> 1.5 segundos de delay
    },
    error: (error) =>{
      alert('Error al registrar el usuario')
      console.log(error)
    }
  })
}

}