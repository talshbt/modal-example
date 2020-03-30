import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../ngbd-modal-content/ngbd-modal-content.component';

@Component({
  selector: 'app-ngbd-modal',
  templateUrl: './ngbd-modal.component.html',
  styleUrls: ['./ngbd-modal.component.css']
})
export class NgbdModalComponent {

   constructor(private modalService: NgbModal) {}


  ngOnInit() {
  }

   open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }

}