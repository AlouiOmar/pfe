import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import {AuthGuard} from './services/auth/auth-guard.service';
import {FullComponent} from './layouts/full/full.component';
import {ContentComponent} from './layouts/content/content.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '',
    component: FullComponent,
    data: { title: 'full Views' },
    children: Full_ROUTES,
  },
  { path: '', component: ContentComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
];
//, canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
