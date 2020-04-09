import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private cols = ["id", "name", "email"];
  private rows = [];

  constructor() { }

  getCols(){
    return this.cols;
  }
  
  getRows(){

  }

  getNewRowFromClient(){

  }

  private sendNewRowToDB(){

  }

  getRowsFromDb(){

  }

}