import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class TableService {
  modalOpened = new Subject<any>();
  rowAdded = new Subject<any>();
  private cols = ["id","name","email"];

   private rowsDetailsArr = [];
  private rowsDetailsObj = {};

  constructor() { }

  getModalEvent(){
    this.modalOpened.next();
  }

  addRow(row){
      // console.log(row);

      this.rowsDetailsArr.push(row);

      console.log("current rows arr : " );

      console.log(this.rowsDetailsArr);

      // this.rowsDetailsObj = row;
      // console.log("current row : " + row);
      // console.log("current rows arr : " + this.rowsDetailsArr);

      this.rowAdded.next(this.rowsDetailsArr.slice());


  }

  getCols(){
    return this.cols;
  }

}