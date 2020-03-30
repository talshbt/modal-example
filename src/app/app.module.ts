import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';

import { NgModalComponent } from './ng-modal/ng-modal.component';

@NgModule({
 imports: [
    BrowserModule,
    FormsModule,
    NgbModalModule
  ],
  declarations: [
    AppComponent,
    NgModalComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgModalComponent]

})
export class AppModule { }
