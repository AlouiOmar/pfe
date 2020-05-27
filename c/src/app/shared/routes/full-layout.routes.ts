import { Routes, RouterModule } from '@angular/router';
import {FullPagesModule} from '../../pages/full-pages/full-pages.module';



//Route for content layout with sidebar, navbar and footer.
export function loadFullPagesModule() {
    return FullPagesModule;
}
export const Full_ROUTES: Routes = [
  {
    path: '',
    loadChildren: loadFullPagesModule
    // loadChildren:  './pages/full-pages/full-pages.module#FullPagesModule'
  },
];
