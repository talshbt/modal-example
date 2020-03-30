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

    // let data:String = this.tableService.getCols()[0];
    // let cols = this.tableService.getCols();
    let rowDetails = [];
    let rowDetailsObj = {};
      for(var i = 0 ; i < this.cols.length; ++i){
        rowDetails.push(this.signupForm.value[this.cols[i]]);

        // console.log(this.signupForm.value[this.cols[i]]);
      }


       rowDetailsObj = this.createObj();
       console.log(rowDetailsObj);

      this.tableService.addRow(rowDetailsObj);
      this.signupForm.reset();
      this.context.resolve();

  }


  createObj(){
    console.log("createObj")
    var rowDetails = { };
      for(var i = 0 ; i < this.cols.length; ++i){
        rowDetails[this.cols[i]] = this.signupForm.value[this.cols[i]];
      }

      return rowDetails;



  }

}