import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import {TableService} from '../shared/table.service'

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit, OnDestroy {
  initForm = "";
    rowToEdit = [];
    InitrowToEdit = [];
   @ViewChild("f") signupForm: NgForm;
    cols = [];
    canClear = false;
    rowDetails = { };
    sub: Subscription;
    onEditMode = false;
    // rowToEdit = {};


  constructor( private tableService: TableService) { 
    
  }


  ngOnInit() {
    this.cols = this.tableService.getCols();
    this.onEditMode = this.tableService.isEditMode();
    console.log("isEditMode ? "  + this.tableService.isEditMode())
    if(this.tableService.isEditMode()){
          this.rowToEdit = this.tableService.getRowToEdit();

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
  
  this.rowToEdit = [];
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


   ngOnDestroy(){
    //  this.sub.unsubscribe();
   }

 

   

}