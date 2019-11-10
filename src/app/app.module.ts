import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopModule } from './page/top/top.module';
import { ListModule } from './page/list/list.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/index.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopModule,
    ListModule,
    StoreModule.forRoot({listReducer: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
