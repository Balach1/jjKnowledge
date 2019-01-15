import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BjjGuardsComponent } from './bjj-guards/bjj-guards.component';
import { BjjTopGameComponent } from './bjj-top-game/bjj-top-game.component';

@NgModule({
  declarations: [
    AppComponent,
    BjjGuardsComponent,
    BjjTopGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
