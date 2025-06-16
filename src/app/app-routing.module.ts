import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AdditionalSettingsComponent } from './pages/additional-settings/additional-settings.component';
import { QuickSetupComponent } from './pages/additional-settings/quick-setup/quick-setup.component';
import { NatRedirectionComponent } from './pages/additional-settings/nat-redirection/nat-redirection.component';
import { InternetComponent } from './pages/internet/internet.component';
import { WirelessModeComponent } from './pages/wireless-mode/wireless-mode.component';
import { WorkModeComponent } from './pages/additional-settings/work-mode/work-mode.component';
import { EasyMeshComponent } from './pages/additional-settings/easy-mesh/easy-mesh.component';
import { NetworkComponent } from './pages/additional-settings/network/network.component';
import { TpLinkComponent } from './pages/additional-settings/tp-link/tp-link.component';
import { ParentControlComponent } from './pages/additional-settings/parent-control/parent-control.component';
import { ProtectionComponent } from './pages/additional-settings/protection/protection.component';
import { Ipv6Component } from './pages/additional-settings/ipv6/ipv6.component';
import { SystemComponent } from './pages/additional-settings/system/system.component';

let routes: Routes;
routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
    title: 'Your routes',
  },
  {
    path: 'additional-settings',
    component: AdditionalSettingsComponent,
    title: 'Your additional settings',
    children: [
      {
        path: '',
        component: QuickSetupComponent,
        title: 'Your Quick Setup',
      },
      {
        path: 'work-mode',
        component: WorkModeComponent,
        title: 'Work Mode',
      },
      {
        path: 'easy-mesh',
        component: EasyMeshComponent,
        title: 'Easy Mesh',
      },
      {
        path: 'network',
        component: NetworkComponent,
        title: 'Network',
      },
      {
        path: 'tp-link',
        component: TpLinkComponent,
        title: 'TP Link ID',
      },
      {
        path: 'nat-redirection',
        component: NatRedirectionComponent,
        title: 'NAT Redirection',
      },
      {
        path: 'parent-control',
        component: ParentControlComponent,
        title: 'Parent Control',
      },
      {
        path: 'protection',
        component: ProtectionComponent,
        title: 'Protection',
      },
      {
        path: 'ipv6',
        component: Ipv6Component,
        title: 'IPv6',
      },
      {
        path: 'system',
        component: SystemComponent,
        title: 'System',
      }
    ],
  },
  {
    path: 'internet',
    component: InternetComponent,
    title: 'Your internet settings',
  },
  {
    path: 'wireless-mode',
    component: WirelessModeComponent,
    title: 'Wireless Mode settings',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
