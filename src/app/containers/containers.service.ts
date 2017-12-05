import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { Spec, Schema } from 'swagger-schema-official';

import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators/catchError';
import {tap} from 'rxjs/operators';

@Injectable()
export class ContainersService {
  constructor() { }

}
