import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './shared/filter.pipe';
 import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgModalComponent } from './ng-modal/ng-modal.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { TableService } from './shared/table.service';
import { TableComponent } from './table/table.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { ModalService } from './shared/modal.service';
import { PostService } from './shared/post.service';

@NgModule({
 imports: [
    BrowserModule,
    FormsModule,
    NgbModalModule,
    HttpClientModule
    
  ],
  declarations: [
    AppComponent,
    NgModalComponent,
    AddNewItemComponent,
    TableComponent,
    FilterPipe,
    PlaceholderDirective
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgModalComponent, AddNewItemComponent, TableComponent],
  providers: [TableService, ModalService, PostService]

})
export class AppModule { }
