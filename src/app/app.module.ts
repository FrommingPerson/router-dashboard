import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouteTableComponent } from './component/route-table/route-table.component';
import { CopyButtonComponent } from './component/copy-button/copy-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdditionalSettingsComponent } from './additional-settings/additional-settings.component';
import { QuickSetupComponent } from './additional-settings/quick-setup/quick-setup.component';
import { NatRedirectionComponent } from './additional-settings/nat-redirection/nat-redirection.component';

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
