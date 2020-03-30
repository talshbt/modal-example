import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { NgbdModalComponent } from './ngbd-modal/ngbd-modal.component';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { NgModalComponent } from './ng-modal/ng-modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule],

  declarations: [ AppComponent, HelloComponent, ModalComponent, NgbdModalComponent, NgbdModalContentComponent, NgModalComponent ],
    exports: [NgbdModalComponent],

  bootstrap:    [ AppComponent ],
    entryComponents: [NgbdModalContentComponent]

})
export class AppModule { }
