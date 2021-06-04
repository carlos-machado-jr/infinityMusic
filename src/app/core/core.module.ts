import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersInterceptor } from './interceptors/headers.Interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[HeadersInterceptor]
})
export class CoreModule { }
