import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ScanningResult} from "../models/ScanningResult";
import {SourceToScan} from "../models/sourceToScan";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {
  apiUrl = environment.baseUrl;
  apiName = "";

  constructor(private http: HttpClient) { }

  scrape(sts: SourceToScan): Observable<ScanningResult> {
    let apiName = "/api/scanners/"+sts.scannerId+"/scan"
    return this.http.post<ScanningResult>(this.apiUrl + apiName, sts)
  }

}
