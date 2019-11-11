import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopModule } from './page/top/top.module';
import { ListModule } from './page/list/list.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FetchEffects } from './effects/fetch.effects';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TopModule,
    ListModule,
    StoreModule.forRoot({listReducer: reducer}),
    EffectsModule.forRoot([FetchEffects])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
