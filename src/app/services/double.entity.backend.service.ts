import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Entity} from "../models/entity";

@Injectable({
  providedIn: 'root'
})
export class DoubleEntityBackendService<ApiRess extends Entity, Out> {

  apiUrl = environment.baseUrl;
  apiName = "";

  constructor(private http: HttpClient, private router: Router) {
  }

  setApiName(e: ApiRess) {
    this.apiName = "/api/" + this.determineName(e) + "/"
  }

  determineName(t: ApiRess) {
    return t.constructor.name.toLowerCase() + "s";
  }


  // loadEntity(input: E, suffix: string = "", ouput: Out): Observable<Out> {
  //   if (input.id === undefined)
  //     throw Error("id not defined");
  //   let apiName = "/api/" + this.determineName(input) + "/"
  //   return this.http.get<Out>(this.apiUrl + apiName + input.id + suffix)
  // }
  //
  loadEntity2(input: ApiRess, ouput: Out, suffix: string = ""): Observable<Out> {
    let apiName = "/api/" + this.determineName(input) + "/"
    return this.http.post<Out>(this.apiUrl + apiName + suffix, input)
  }


}
