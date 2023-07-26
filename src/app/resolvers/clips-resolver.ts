import { inject } from '@angular/core';
import IClip from '../models/clip.model';
import { ClipService } from '../services/clip.service';
import { map } from 'rxjs/operators';

import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

export const ClipsResolver: ResolveFn<IClip | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let router: Router;
  return inject(ClipService)
    .clipsCollection.doc(route.params['id'])
    .get()
    .pipe(
      map((snapshot) => {
        const data = snapshot.data();
        if (!data) {
          router.navigate(['/']);
          return null;
        }
        return data;
      })
    );
};
