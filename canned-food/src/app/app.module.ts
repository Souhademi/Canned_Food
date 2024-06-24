import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CannedComponent } from './cannedFood/canned.component';

@NgModule({
  declarations: [
    // AppComponent,
    // NoteComponent
  ],
  imports: [
    AppComponent,
    CannedComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
//  bootstrap: [AppComponent]
})
export class AppModule { }
