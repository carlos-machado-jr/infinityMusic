import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HeadersInterceptorProvider } from './core/interceptors/headers.Interceptor';
import { PlayMusicPage } from './modules/play-music/play-music.page';
import { FormsModule } from '@angular/forms';
import { Media } from '@ionic-native/media/ngx';

@NgModule({
  declarations: [AppComponent, PlayMusicPage],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            CoreModule, 
            HttpClientModule, 
            HttpClientJsonpModule,
            FormsModule,
            ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HeadersInterceptorProvider, Media],
  bootstrap: [AppComponent],
})
export class AppModule {}
