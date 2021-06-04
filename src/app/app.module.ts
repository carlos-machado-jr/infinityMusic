import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HeadersInterceptorProvider } from './core/interceptors/headers.Interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CoreModule, HttpClientModule, HttpClientJsonpModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HeadersInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
