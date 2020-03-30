import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css']
})
export class NgbdModalContentComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}