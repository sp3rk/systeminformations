import { RouterModule, Routes } from '@angular/router';

import { CpuRoutingModule } from './components/cpu/cpu-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/components';
import { SystemRoutingModule } from './components/system/system-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    CpuRoutingModule,
    SystemRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
