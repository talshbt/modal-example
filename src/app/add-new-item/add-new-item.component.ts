import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import {TableService} from '../shared/table.service'

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {
    textValue = [];
    textValue2 = [];
   @ViewChild("f", { static: false }) signupForm: NgForm;
    cols = [];
    canClear = false;
    rowDetails = { };
    sub: Subscription;
    onEditMode = false;
    rowToEdit = {};
    rowIndex;

  // private fieldArray = ["id","name","email"];

  constructor( private tableService: TableService) { 
    
  }

  // getForm(){
  //   return 
  // }

  ngOnInit() {
    this.cols = this.tableService.getCols();
    this.onEditMode = this.tableService.isEditMode();
    if(this.tableService.isEditMode()){
          this.textValue = this.tableService.getRowToEdit();

    }
     
  }

    private getFormDetails() {
      this.cols.forEach(function (data) {
        console.log(data);
    }); 
    
   

  }


  private createObjToSend(){
    let rowDetails = [];
        let rowDetailsObj = {};
          for(var i = 0 ; i < this.cols.length; ++i){
            rowDetails.push(this.signupForm.value[this.cols[i]]);

          }

          rowDetailsObj = this.createObj();
          return rowDetailsObj;
  }

  onSubmit() {
    
    this.tableService.onSaveData();

    let rowDetailsObj = this.createObjToSend();
    console.log( this.tableService.isEditMode())
  
      // if(this.onEditMode){
      //     this.tableService.getUpdatedRow(rowDetailsObj, this.rowIndex);
      // }else{
      //     this.tableService.addRow(rowDetailsObj);
      // }
      this.tableService.addRow(rowDetailsObj);
      this.signupForm.reset();

    


  }


  createObj(){    
      for(var i = 0 ; i < this.cols.length; ++i){
        this.rowDetails[this.cols[i]] = this.signupForm.value[this.cols[i]];
      }
      return this.rowDetails;
  }

  onClearForm(){
   this.signupForm.reset();  }

 

   

}