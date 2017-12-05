import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ContainersEffects } from '@app/containers/containers.effects';
import { containersReducer } from '@app/containers/containers.reducer';
import { ContainersService } from '@app/containers/containers.service';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('containers', containersReducer),
    EffectsModule.forFeature([ContainersEffects])
  ],
  declarations: [],
  providers: [
    ContainersService
  ]
})
export class ContainersModule { }
