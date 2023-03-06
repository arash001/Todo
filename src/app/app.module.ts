import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { TodoComponent } from './Components/todo/todo.component';
import { SharedModule } from './Modules/shared/shared.module';
import { AboutComponent } from './Components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
