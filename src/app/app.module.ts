import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouteTableComponent } from './components/route-table/route-table.component';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AdditionalSettingsComponent } from './pages/additional-settings/additional-settings.component';
import { QuickSetupComponent } from './pages/additional-settings/quick-setup/quick-setup.component';
import { NatRedirectionComponent } from './pages/additional-settings/nat-redirection/nat-redirection.component';
import { InternetComponent } from './pages/internet/internet.component';
import { WirelessModeComponent } from './pages/wireless-mode/wireless-mode.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { WorkModeComponent } from './pages/additional-settings/work-mode/work-mode.component';
import { EasyMeshComponent } from './pages/additional-settings/easy-mesh/easy-mesh.component';
import { NetworkComponent } from './pages/additional-settings/network/network.component';
import { TpLinkComponent } from './pages/additional-settings/tp-link/tp-link.component';
import { ParentControlComponent } from './pages/additional-settings/parent-control/parent-control.component';
import { ProtectionComponent } from './pages/additional-settings/protection/protection.component';
import { Ipv6Component } from './pages/additional-settings/ipv6/ipv6.component';
import { SystemComponent } from './pages/additional-settings/system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    RouteTableComponent,
    CopyButtonComponent,
    AdditionalSettingsComponent,
    QuickSetupComponent,
    NatRedirectionComponent,
    InternetComponent,
    WirelessModeComponent,
    ComingSoonComponent,
    WorkModeComponent,
    EasyMeshComponent,
    NetworkComponent,
    TpLinkComponent,
    ParentControlComponent,
    ProtectionComponent,
    Ipv6Component,
    SystemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
