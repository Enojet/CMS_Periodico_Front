// RUTAS GUARD SON PUBLICAS NO HACE FALTA GUARDIA

// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   // 1 COMPROBAR SI HAY TOKEN
//   const tokenValue = localStorage.getItem('token');
//   // (Router)= para enrutador (BP)
//   const router = inject(Router);
//   // 2 SI HAY TOKEN, PERMITIR ACCESO
//   if (tokenValue) {
//     return true;
//   }
//   // // 3 SI NO HAY TOKEN, RECHAZAR ACCESO
//   // Dirige al login (BP)
//   router.navigate(['/auth/login']);
//   return false;
// };