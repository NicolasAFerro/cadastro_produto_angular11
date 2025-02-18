import { NgModule } from '@angular/core';
import { ServerModule, provideServerRendering } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { FormsModule } from '@angular/forms';
//v nova maneira de fazer requisições http a partir do angular 15;
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [AppModule, ServerModule, FormsModule],
  providers: [
    provideServerRendering(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
