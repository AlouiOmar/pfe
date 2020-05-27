import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
import { FullPagesModule } from './pages/full-pages/full-pages.module';
import { ContentPagesModule } from './pages/content-pages/content-pages.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule, DevExtremeModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FullComponent,
  ],
  imports: [
      BrowserAnimationsModule,
      AppRoutingModule,
      ServiceModule,
      SharedModule,
      FullPagesModule,
      ContentPagesModule,
      DxDataGridModule,
      DxTemplateModule,
      DxBulletModule,
      HttpClientModule,
      DevExtremeModule

  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
