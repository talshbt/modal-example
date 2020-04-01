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
    textValue = "blabla";
   @ViewChild("f", { static: false }) signupForm: NgForm;
    cols = [];
    canClear = false;
    rowDetails = { };
    sub: Subscription;
    onEditMode = false;

  // private fieldArray = ["id","name","email"];

  constructor( private tableService: TableService) { 
    
  }

  ngOnInit() {
    this.signupForm.value.id = "ckvdsdf";
    console.log(this.signupForm.value.id)
     this.sub = this.tableService.rowEdit.subscribe(
       (row) => {
         this.onEditMode = true;
        console.log("------need to edit----------")
        console.log(row)
        
        // this.rowDetailsArr = rowDetailsArr;
        // console.log("table get new row ");
        // console.log(this.rowDetailsArr);

      }
     )
     this.cols = this.tableService.getCols();
     
  }

    private getFormDetails() {
      this.cols.forEach(function (data) {
        console.log(data);
    }); 
    
   

  }

  onSubmit() {
    this.tableService.onSaveData();

    let rowDetails = [];
    let rowDetailsObj = {};
      for(var i = 0 ; i < this.cols.length; ++i){
        rowDetails.push(this.signupForm.value[this.cols[i]]);

      }

      rowDetailsObj = this.createObj();

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