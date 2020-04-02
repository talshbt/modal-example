import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {TableService} from '../shared/table.service'
import { Subscription } from "rxjs";

@Component({
  selector: 'app-ng-modal',
  templateUrl: './ng-modal.component.html',
  styleUrls: ['./ng-modal.component.scss']
})
export class NgModalComponent implements OnInit {
  sub: Subscription;
  componentName = null;

constructor(
    private _NgbActiveModal: NgbActiveModal, private tableService: TableService
  ) {


    
   }

  get activeModal() {
    return this._NgbActiveModal;
  }
  ngOnInit() {
       this.sub = this.tableService.saveData.subscribe(
       () => {
        //  console.log("in modal componenet")
        //   console.log(str)
         this.activeModal.close('Close click');

      }
     )

     this.componentName = this.tableService.componentName;
     console.log(this.tableService.getComponentName())

     
  }

}