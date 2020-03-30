import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import {TableService} from '../shared/table.service'
import { AddNewItemComponent } from '../add-new-item/add-new-item.component';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  sub: Subscription;
  cols = [];
  rowDetailsArr = [];

  constructor(private tableService: TableService) { }

  ngOnInit() {
     this.sub = this.tableService.rowAdded.subscribe(
       (rowDetailsArr) => {
        this.rowDetailsArr = rowDetailsArr;
        console.log("table get new row ");
        console.log(this.rowDetailsArr);

      }
     )

     this.cols = this.tableService.getCols();
     console.log(this.cols);
  }

  async onAdd() {
    // this.tableService.getModalEvent();
    // console.log(await this.modalService.open(AddNewItemComponent));
  }

}