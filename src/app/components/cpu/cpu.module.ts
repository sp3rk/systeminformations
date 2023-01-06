import { CommonModule } from '@angular/common';
import { CpuComponent } from './cpu.component';
import { CpuRoutingModule } from './cpu-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CpuComponent],
  imports: [CommonModule, SharedModule, CpuRoutingModule]
})
export class CpuModule {}
