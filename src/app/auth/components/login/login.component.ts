import { Component, inject } from '@angular/core'; // Importamos Component e inject para inyectar servicios
import { FormsModule } from '@angular/forms'; // Importamos FormsModule
import { AuthService } from '../../service/auth.service'; // Importamos el servicio de autenticacion

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Importamos FormsModule para trabajar formulario clásico
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 // 2 LLAMAR SERVICIO REGISTRAR USUARIO
 // Inyectamos servicio AuthService
  private authService : AuthService = inject(AuthService)
  
  public userLoginForm = {
    //Ponemos atributos que son string (vacios)
    username: '', // Email o nombre de usuario
    password: '' // Contraseña
  }
  
  // 1 VALIDACION Y ENVIAR DATOS
  // Verifica que todos los campos esten llenos
  // Si algun campo esta vacio, muestra un mensaje de error y no envia el formulario
  // Si todos los campos estan llenos, envia el formulario
  handleLoginForm() {

    const userFormValues = Object.values(this.userLoginForm)

    if(userFormValues.includes('')) {
      alert('Todos los campos son obligatorios') // Muestra un mensaje de error si algun campo esta vacio
      return
    }

  // 2 LLAMAR SERVICIO REGISTRAR USUARIO
  // Metodo login() de AuthService que envia los datos al backend
  // Suscribir: escuchar al servidor y recibir la respuesta
  this.authService.login(this.userLoginForm).subscribe({
    next: (data: any) =>{
      alert(data.message)
      // 4 PERSISTENCIA(RECOGER TOKEN) LOCALSTORAGE
      // localstorage: objeto del back con datos
      // setItem= quiere decir que seleccionamos algo del objeto
      // 
      localStorage.setItem(`token`, data.token)
    },
    error: (error) =>{
      alert('Error al registrar el usuario')
      console.log(error)
    }
  })
    
  }
 

}
