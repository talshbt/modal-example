import { Component } from '@angular/core';
import { NgModalComponent } from './ng-modal/ng-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './shared/modal.service';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( private modalService :ModalService
  ) { }


  openModal() {
    this.modalService.openModal(TableComponent);
  }


}
