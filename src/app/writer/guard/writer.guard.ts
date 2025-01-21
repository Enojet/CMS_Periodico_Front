import { CanActivateFn } from '@angular/router';

export const writerGuard: CanActivateFn = (route, state) => {
  return true;
};
