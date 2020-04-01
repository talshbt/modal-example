import { Injectable } from '@angular/core';
import { Subject } from "rxjs";


@Injectable()
export class TableService {
  modalOpened = new Subject<any>();
  rowChanged = new Subject<any>();
  saveData = new Subject<any>();
  rowEdit = new Subject<any>();
  rowEdited = new Subject<object>();

  private cols = ["id","name","email"];
  private rowsDetailsArr = [{id:"id", name:"name", email:"mail"}];

  

  private rowsDetailsObj = {};

  constructor() { }

  getModalEvent(){
    this.modalOpened.next();
  }

  addRow(row){
      // console.log(row);

      this.rowsDetailsArr.push(row);
      console.log(this.rowsDetailsArr)
      this.rowChanged.next(this.rowsDetailsArr.slice());


  }

  getCols(){
    return this.cols;
  }



  onSaveData(){
    this.saveData.next("save data in service");
  }

  deleteRow(indexRow){
   this.rowsDetailsArr.splice(indexRow,1);
   this.rowChanged.next(this.rowsDetailsArr.slice())

  }

  editRow(indexRow){
    console.log("edit row service")
    this.rowEdit.next(this.rowsDetailsArr[indexRow]);
  //  this.rowsDetailsArr.splice(indexRow,1);
  //  this.rowChanged.next(this.rowsDetailsArr.slice())

  }

  getTempArr(){
    return this.rowsDetailsArr.slice();
  }

}