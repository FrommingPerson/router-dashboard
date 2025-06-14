import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import { AdditionalSettingsComponent } from './additional-settings/additional-settings.component';
import { QuickSetupComponent } from './additional-settings/quick-setup/quick-setup.component';
import { NatRedirectionComponent } from './additional-settings/nat-redirection/nat-redirection.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
    title: "Your routes"
  },
  {
    path: 'additional-settings',
    component: AdditionalSettingsComponent,
    title: 'Your additional settings',
    children: [
      {
        path: '',
        component: QuickSetupComponent,
        title: 'Your Quick Setup'
      },
      {
        path: 'nat-redirection',
        component: NatRedirectionComponent,
        title: 'NAT Redirection'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
