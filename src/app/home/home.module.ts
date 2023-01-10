import { BaseboardComponent } from '../components/baseboard/baseboard.component';
import { BiosComponent } from '../components/bios/bios.component';
import { ChassisComponent } from '../components/chassis/chassis.component';
import { CommonModule } from '@angular/common';
import { CpuComponent } from '../components/cpu/cpu.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NetComponent } from '../components/net/net.component';
import { NgModule } from '@angular/core';
import { OsComponent } from '../components/os/os.component';
import { SharedModule } from '../shared/shared.module';
import { SystemComponent } from '../components/system/system.component';
import { UsersComponent } from '../components/users/users.component';
import { UuidComponent } from '../components/uuidData/uuid.component';
import { VersionsComponent } from '../components/versions/versions.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    SystemComponent,
    UuidComponent,
    CpuComponent,
    BiosComponent,
    BaseboardComponent,
    ChassisComponent,
    OsComponent,
    VersionsComponent,
    NetComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
