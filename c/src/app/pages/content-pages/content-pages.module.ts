import { ChartModule } from 'angular2-highcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentPagesRoutingModule} from './content-pages-routing.module';

import {
    MatButtonModule,
    MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatGridListModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSnackBarModule,
    MatTabsModule, MatTooltipModule
} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {
    DxDataGridModule,
    DxDateBoxModule, DxNumberBoxModule,
    DxPopoverModule,
    DxPopupModule,
    DxSelectBoxModule, DxTagBoxModule,
    DxTemplateModule, DxTextBoxModule,
    DxTreeListModule,
    DxBulletComponent,
    DevExtremeModule
} from 'devextreme-angular';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsoComponent } from './conso/conso.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AddlampeComponent } from './addlampe/addlampe.component';
import { AddcapteurComponent } from './addcapteur/addcapteur.component';
import { ListlampeComponent } from './listlampe/listlampe.component';
import { ListcapteurComponent } from './listcapteur/listcapteur.component';
import { SingleLampadaireComponent } from './single-lampadaire/single-lampadaire.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LampMapComponent } from './lamp-map/lamp-map.component';
import {AgmCoreModule} from '@agm/core';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import { OsmViewComponent } from './osm-view/osm-view.component';
import { AlertPanneComponent } from './alert-panne/alert-panne.component';


declare var require: any;
@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        ContentPagesRoutingModule,
        MatIconModule,
        MatGridListModule,
        MatMenuModule,
        MatCardModule,
        NgxChartsModule,
        MatIconModule,
        MatButtonModule,
        DxDataGridModule,
        DxTemplateModule,
        DxPopoverModule,
        DxPopupModule,
        MatTabsModule,
        MatListModule,
        DxTreeListModule,
        MatDialogModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatInputModule,
        MatTooltipModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        HighchartsChartModule,
        DxDateBoxModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxTagBoxModule,
        DxNumberBoxModule,
        HttpClientModule,
        DevExtremeModule,
        ChartModule.forRoot(require('highcharts')),
        AngularOpenlayersModule,

        AgmCoreModule.forRoot(
            {
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                apiKey: 'AIzaSyAUT7ZJJC4FwMXD8ab-OZgg0z69al7q_2c'
            },
)

    ],
    providers: [
        MatDatepickerModule
    ],
    declarations: [

    DashboardComponent,

    ConsoComponent,

    ListComponent,

    AddComponent,

    AddlampeComponent,

    AddcapteurComponent,

    ListlampeComponent,

    ListcapteurComponent,

    SingleLampadaireComponent,

    AddUserComponent,

    ListUsersComponent,

    LampMapComponent,

    OsmViewComponent,

    AlertPanneComponent],
    entryComponents: [

    ]
})
export class ContentPagesModule { }
