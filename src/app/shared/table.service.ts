import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TableService {
  modalOpened = new Subject<any>();
  rowChanged = new Subject<any>();
  saveData = new Subject<any>();
  rowToEdit = [];
  onEditMode = false;
  rowIndexToEdit = null;
  componentToOpen =  new Subject<any>();
  componentName = null;
  private cols = ["id", "name", "email"];
  private rowsDetailsArr = [];
  private rowsDetailsObj = {};



  constructor() {}

  getModalEvent() {
    this.modalOpened.next();
  }

  addRow(row) {
    if (this.onEditMode) {
      this.rowsDetailsArr[this.rowIndexToEdit] = row;
      this.onEditMode = false;
    } else {
      this.rowsDetailsArr.push(row);
    }

    this.rowChanged.next(this.rowsDetailsArr.slice());
  }

  getCols() {
    return this.cols;
  }

  onSaveData() {
    this.componentName = this.getComponentName();
    console.log(name);
    this.saveData.next(name);
  }

  deleteRow(indexRow) {
    this.rowsDetailsArr.splice(indexRow, 1);
    this.rowChanged.next(this.rowsDetailsArr.slice());
  }

  editRow(indexRow) {
    this.onEditMode = true;
    this.rowIndexToEdit = indexRow;
    var rowDetails = [];
    for (var i = 0; i < this.cols.length; ++i) {
      this.rowToEdit.push(this.rowsDetailsArr[indexRow][this.cols[i]]);
    }
  }

  getRowToEdit() {
    if (this.onEditMode) {
      return this.rowToEdit;
    } else {
      return [];
    }
  }

  isEditMode() {
    return this.onEditMode;
  }

  setComponentName(name){
    this.componentName = name;
  }

  getComponentName(){
    return this.componentName;
  }

  
}
