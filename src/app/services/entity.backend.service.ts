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

  constructor(private http: HttpClient, private router: Router) {
  }

  loadEntity(e: E): Observable<E> {
    if (e.id === undefined)
      throw Error("id not defined");
    let apiName = "/api/" + this.determineName(e) +"/"
    return this.http.get<E>(this.apiUrl + apiName + e.id)
  }

  saveEntity(t: E): Observable<E> {
    let apiName = "/api/" + this.determineName(t) +"/"
    return this.http.put<E>(this.apiUrl + apiName + t.id, t)
  }

  determineName(t: E) {
    return t.constructor.name.toLowerCase() + "s";
  }


}
