import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { NgbdModalComponent } from './ngbd-modal/ngbd-modal.component';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ModalComponent, NgbdModalComponent, NgbdModalContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
