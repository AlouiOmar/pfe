import { Routes, RouterModule } from '@angular/router';
import {ContentPagesModule} from '../../pages/content-pages/content-pages.module';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export function loadContentPagesModule() {
    return ContentPagesModule;
}
export const CONTENT_ROUTES: Routes = [
     {
        path: '',
        loadChildren: loadContentPagesModule
        // loadChildren: './pages/content-pages/content-pages.module#ContentPagesModule'
    }
];
