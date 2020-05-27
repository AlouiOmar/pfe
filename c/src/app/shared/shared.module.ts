import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MyNavComponent} from './app-nav/app-nav.component';
import {
    MatBadgeModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';



@NgModule({
    exports: [
        CommonModule,
        MyNavComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatExpansionModule
    ],
    declarations: [
       MyNavComponent,
    ],

})
export class SharedModule { }
