import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Entity} from "../models/entity";
import {getOutputHashFormat} from "@angular-devkit/build-angular/src/webpack/utils/helpers";

@Injectable({
  providedIn: 'root'
})
export class DoubleEntityBackendService<Inp, Out extends Entity> {

  apiUrl = environment.baseUrl;
  apiName = "";

  constructor(private http: HttpClient, private router: Router) {
  }

  determineName(t: Out) {
    return t.constructor.name.toLowerCase() + "s";
  }


  loadEntity(input: Inp, ouput: Out, suffix: string = ""): Observable<Out> {
    let apiName = "/api/" + this.determineName(ouput) + "/"
    return this.http.post<Out>(this.apiUrl + apiName + suffix, input)
  }


}
