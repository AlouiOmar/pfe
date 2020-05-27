import {NgModule} from '@angular/core';
import {FullPagesRoutingModule} from './full-pages-routing.module';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FullPageTestComponent } from './full-page-test/full-page-test.component';


@NgModule({
  imports: [
      FullPagesRoutingModule,
      CommonModule,
      FormsModule,
      MatGridListModule,
      MatIconModule,
      MatFormFieldModule,
      LayoutModule,
      MatButtonModule,
      MatInputModule,
  ],
  declarations: [
      LoginComponent,
      PageNotFoundComponent,
      FullPageTestComponent
  ]
})
export class FullPagesModule { }
