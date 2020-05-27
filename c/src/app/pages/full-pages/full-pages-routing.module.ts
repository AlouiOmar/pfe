import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { FullPageTestComponent } from './full-page-test/full-page-test.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullpagetest',
        component: FullPageTestComponent,
        data: {
          title: 'login Page'
        }


      }, {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'login Page'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
