import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { LocalStorageService, Action } from '@app/core';

import { ContainersService } from '@app/containers/containers.service';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators';

import { CONTAINERS_INIT, CONTAINERS_KEY } from '@app/containers/containers.reducer';

@Injectable()
export class ContainersEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private containerService: ContainersService
  ) {}

}
