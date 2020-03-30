import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-modal',
  templateUrl: './ng-modal.component.html',
  styleUrls: ['./ng-modal.component.css']
})
export class NgModalComponent implements OnInit {

constructor(
    private _NgbActiveModal: NgbActiveModal
  ) { }

  get activeModal() {
    return this._NgbActiveModal;
  }
  ngOnInit() {
  }

}