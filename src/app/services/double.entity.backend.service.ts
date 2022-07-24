import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Entity} from "../models/entity";

@Injectable({
  providedIn: 'root'
})
export class DoubleEntityBackendService<E extends Entity, O extends Entity> {

  apiUrl = environment.baseUrl;
  apiName = "";

  constructor(private http: HttpClient, private router: Router) {
  }

  setApiName(e: E) {
    this.apiName = "/api/" + this.determineName(e) + "/"
  }

  determineName(t: E) {
    return t.constructor.name.toLowerCase() + "s";
  }


  loadEntity(input: E, suffix: string = "", ouput: O): Observable<O> {
    if (input.id === undefined)
      throw Error("id not defined");
    let apiName = "/api/" + this.determineName(input) + "/"
    return this.http.get<O>(this.apiUrl + apiName + input.id + suffix)
  }


}
