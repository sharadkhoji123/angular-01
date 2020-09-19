import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PowerBoosterComponent } from './pipe-example/power-booster.component';
import { FormsModule } from '@angular/forms';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    PipeExampleComponent,
    PowerBoosterComponent,
    FlyingHeroesComponent
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
