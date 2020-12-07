import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendURL } from '../connectionURL/backend-url.service';
import { ShareDetail } from "../entity/share-detail";


@Injectable({
  providedIn: 'root'
})
export class ShareDetailsCallService {

  private baseUrl: string = `${backendURL.springURL}/shareDetail/`;

  constructor(private http: HttpClient) { }

  getShareDetails(component):Observable<any>{
    console.log('inside getShareDetails...'+component);
    console.log('inside getShareDetails...'+this.baseUrl);
    return this.http.get(`${this.baseUrl}`+component);
  }

}
