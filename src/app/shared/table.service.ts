import { Injectable } from '@angular/core';
import { Subject } from "rxjs";


@Injectable()
export class TableService {
  modalOpened = new Subject<any>();
  rowChanged = new Subject<any>();
  saveData = new Subject<any>();
  rowEdit = new Subject<any>();
  rowEditChanged = new Subject<object>();
  rowToEdit = [];
  onEditMode = false;
  rowIndexToEdit = null;
  private cols = ["id","name","email"];
  private rowsDetailsArr = [{id:"id", name:"name", email:"mail"}];

  

  private rowsDetailsObj = {};

  constructor() { }

  getModalEvent(){
    this.modalOpened.next();
  }

  addRow(row){
      // console.log(row);
      console.log("?????????????????" + this.onEditMode)
      if (this.onEditMode){
          this.rowsDetailsArr[this.rowIndexToEdit] = row;
      }else{
        this.rowsDetailsArr.push(row);
      }
      
      console.log(this.rowsDetailsArr)
      this.rowChanged.next(this.rowsDetailsArr.slice());


  }

  getCols(){
    return this.cols;
  }



  onSaveData(){
    console.log(this.onEditMode)
    this.saveData.next("save data in service");
  }

  deleteRow(indexRow){
   this.rowsDetailsArr.splice(indexRow,1);
   this.rowChanged.next(this.rowsDetailsArr.slice())

  }

  editRow(indexRow){
    this.onEditMode = true;
    this.rowIndexToEdit = indexRow;
    console.log("edit row service")
    var rowDetails =  []
     for(var i = 0 ; i < this.cols.length; ++i){
        this.rowToEdit.push(this.rowsDetailsArr[indexRow][this.cols[i]]);
     }
     rowDetails.push(this.rowToEdit, indexRow);
     this.rowEdit.next(rowDetails)

    // this.rowEdit.next(this.rowsDetailsArr[indexRow]);
  //  this.rowsDetailsArr.splice(indexRow,1);
  //  this.rowChanged.next(this.rowsDetailsArr.slice())

  }

  getTempArr(){
    return this.rowsDetailsArr.slice();
  }

  getRowToEdit(){
    // console.log("getRowToEdit")
    // console.log(this.rowToEdit)
     return this.rowToEdit;
   
  }

  getUpdatedRow(newRow ,  index){
      // this.onEditMode = true;
    // console.log("before edit")

    // console.log(this.rowsDetailsArr[index])

    // console.log("after edit")
    // console.log(this.rowsDetailsArr[index])

    this.rowsDetailsArr[index] = newRow;
    this.rowChanged.next(this.rowsDetailsArr.slice());

  }

  isEditMode(){
    console.log("----------------" + this.isEditMode)
    return this.isEditMode;

  }

}