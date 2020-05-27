import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ConsoComponent } from './conso/conso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddlampeComponent } from './addlampe/addlampe.component';
import { ListlampeComponent } from './listlampe/listlampe.component';
import { AddcapteurComponent } from './addcapteur/addcapteur.component';
import { ListcapteurComponent } from './listcapteur/listcapteur.component';
import { SingleLampadaireComponent } from './single-lampadaire/single-lampadaire.component';
import {AuthGuard} from '../../services/auth/auth-guard.service';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {LampMapComponent} from './lamp-map/lamp-map.component';
import {AlertPanneComponent} from './alert-panne/alert-panne.component';
declare var require: any;
const routes: Routes = [
  {
    path: '',
    children: [
         {
             path: 'dashboard',
           component: DashboardComponent ,
             data: {
                title: 'dashboard page'
            }, canActivate: [AuthGuard]

         },
        {
          path: 'conso',
        component: ConsoComponent ,
          data: {
             title: 'conso page'
         }, canActivate: [AuthGuard]

        },
     {
      path: 'listlampadaire',
    component: ListComponent ,
      data: {
         title: 'list page'
     }, canActivate: [AuthGuard]

     },
        {
            path: 'addlampadaire',
            component: AddComponent ,
            data: {
                title: 'add page'
            }, canActivate: [AuthGuard]

        },
        {
            path: 'adduser',
            component: AddUserComponent ,
            data: {
                title: 'add user'
            }, canActivate: [AuthGuard]

        },
        {
            path: 'listuser',
            component: ListUsersComponent ,
            data: {
                title: 'list user'
            }, canActivate: [AuthGuard]

        },
        {
            path: 'lampmap',
            component: LampMapComponent ,
            data: {
                title: 'lampdair map'
            }, canActivate: [AuthGuard]

        },
        {
            path: 'listpanne',
            component: AlertPanneComponent ,
            data: {
                title: 'alert panne'
            }, canActivate: [AuthGuard]

        },
      {
        path: 'addlampe',
      component: AddlampeComponent,
        data: {
          title: 'add page'
      }, canActivate: [AuthGuard]

      },
      {
        path: 'listlampe',
      component: ListlampeComponent ,
        data: {
          title: 'list page'
      }, canActivate: [AuthGuard]

      },
      {
        path: 'addcapteur',
      component: AddcapteurComponent ,
        data: {
          title: 'add page'
      }, canActivate: [AuthGuard]

      },
      {
        path: 'listcapteur',
      component: ListcapteurComponent ,
        data: {
          title: 'list page'
      }, canActivate: [AuthGuard]

      }
          ]
        },
        {
          path: 'listlampadaire/:id',
        component: SingleLampadaireComponent ,
          data: {
             title: 'Détails lampadaire page'
         }, canActivate: [AuthGuard]

        }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
