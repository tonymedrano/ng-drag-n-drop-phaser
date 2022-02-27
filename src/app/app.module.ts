import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DndInterfaceComponent } from './dnd-interface/dnd-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    DndInterfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
