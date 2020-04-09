import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from "@angular/common/http";
@Injectable()
export class PostService {
  private cols = ["id", "name", "email"];
  private rows = [];

  constructor(private http: HttpClient) { }

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