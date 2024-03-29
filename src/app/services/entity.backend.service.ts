import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Entity} from "../models/entity";

@Injectable({
  providedIn: 'root'
})
export class EntityBackendService<E extends Entity> {

  apiUrl = environment.baseUrl;
  apiName = "";

  constructor(private http: HttpClient, private router: Router) {
  }

  setApiName(object: Object) {
    this.apiName = "/api/" + this.determineName(object) + "/"
  }

  searchEntity(e: E, searchTerm: string, attributeName: string = "searchTerm"): Observable<Array<E>> {
    let apiName = "/api/" + this.determineName(e) + "/"
    return this.http.get<Array<E>>(this.apiUrl + apiName + "?"+attributeName+"=" + searchTerm)
  }


  loadEntity(e: E, suffix: string = ""): Observable<E> {
    if (e.id === undefined)
      throw Error("id not defined");
    let apiName = "/api/" + this.determineName(e) + "/"
    return this.http.get<E>(this.apiUrl + apiName + e.id + suffix)
  }

  saveEntity(t: E): Observable<E> {
    console.log(t.id)
    let apiName = "/api/" + this.determineName(t) + "/"
    if (t.id === undefined || t.id === null)
      return this.http.post<E>(this.apiUrl + apiName, t)
    else
      return this.http.put<E>(this.apiUrl + apiName + t.id, t)
  }

  deleteEntity(e: E) {
    if (e.id === undefined)
      throw Error("id not defined");
    let apiName = "/api/" + this.determineName(e) + "/"
    return this.http.delete<E>(this.apiUrl + apiName + e.id)
  }

  determineName(t: object) {
    return t.constructor.name.toLowerCase() + "s";
  }

// -------------------------

  // loadEntityList(id: number, apiName: string, suffix: string = ""): Observable<Array<E>> {  //todo
  //   return this.http.get<Array<E>>(this.apiUrl + apiName + id + suffix)
  // }

  loadEntityListByIntity(e: Entity, suffix: string = ""): Observable<Array<E>> {
    let apiName = "/api/" + this.determineName(e) + "/"
    return this.http.get<Array<E>>(this.apiUrl + apiName + e.id + suffix)
  }

  loadOtherEntit(e: Entity, suffix: string = "", attr: string = "", val: string = ""): Observable<Entity> {
    let requestParams = attr.length > 0 ? ("?" + attr + "=" + val) : "";
    let apiName = "/api/" + this.determineName(e) + "/"
    return this.http.get<E>(this.apiUrl + apiName + e.id + suffix + requestParams)
  }

  loadOtherEntity(id: number, suffix: string = "", attr: string = "", val: string = ""): Observable<E> {
    // if (input.id === undefined)
    //   throw Error("id not defined");
    let requestParams = attr.length > 0 ? ("?" + attr + "=" + val) : "";
    return this.http.get<E>(this.apiUrl + this.apiName + id + suffix + requestParams)
  }

}

// Entity > CRUD
// Entity1 > Entity2 POST
//     STS > MSET
// Entity1 > Entit2-List Get
//     MSET > URL-List
