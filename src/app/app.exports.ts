import { Routes } from '@angular/router';
import { DemoModule } from './demo.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => DemoModule
  },
];
