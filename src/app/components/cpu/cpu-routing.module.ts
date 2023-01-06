import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CpuComponent } from './cpu.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'cpu',
    component: CpuComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpuRoutingModule {}
