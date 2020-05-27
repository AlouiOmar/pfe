import { CapteurService } from 'src/app/services/capteur.service';
import {NgModule, ModuleWithProviders } from '@angular/core';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {  LampadaireService } from './lampadaire.service';
import { LampeService } from './lampe.service';
import { ConsommationService } from './consommation.service';




@NgModule({
  imports: [
      CommonModule,
      HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LampadaireService,
    LampeService,
    CapteurService,
    ConsommationService
  ]
})
export class ServiceModule {

}
