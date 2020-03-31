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

   @ViewChild("f", { static: false }) signupForm: NgForm;
    cols = [];
    canClear = false;
    rowDetails = { };
  // private fieldArray = ["id","name","email"];

  constructor( private tableService: TableService) { 
    
  }

  ngOnInit() {
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
      console.log(rowDetailsObj);

      this.tableService.addRow(rowDetailsObj);
      this.signupForm.reset();
    


  }


  createObj(){
    console.log("createObj")
    
      for(var i = 0 ; i < this.cols.length; ++i){
        this.rowDetails[this.cols[i]] = this.signupForm.value[this.cols[i]];
      }

      return this.rowDetails;



  }

  onClearForm(){
   this.signupForm.reset();  }

}