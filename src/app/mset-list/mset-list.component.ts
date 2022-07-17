import { Component, OnInit } from '@angular/core';
import {Mset} from "../models/mset";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {EntityBackendService} from "../services/entity.backend.service";
import {RessourceUrls} from "../models/ressourceUrls";

@Component({
  selector: 'app-mset-list',
  templateUrl: './mset-list.component.html',
  styleUrls: ['./mset-list.component.scss']
})
export class MsetListComponent implements OnInit {

  msets: Mset[] = new Array()
  mset: Mset = new Mset(undefined, "")
  searchTerm: string = "";
  fireInput = new Subject<string>();
  spinner = false;

  ressourceUrlsList: RessourceUrls[] = [];

  constructor(private msetService: EntityBackendService<Mset>,
              private ressourceUrlsEntityBackendService: EntityBackendService<RessourceUrls>
  ) {
  }

  ngOnInit(): void {

    this.fireInput.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.spinner = true;
        this.msetService.searchEntity(this.mset, this.searchTerm)
          .subscribe((msets: Mset[]) => {
            this.msets = msets;
            this.spinner = false;
          });
      });
  }

  search(): void {
    this.msetService.searchEntity(this.mset, this.searchTerm).subscribe(msets => this.msets = msets);
  }

  showTnView(id: number) {
    // this.tnView = true;
    this.ressourceUrlsEntityBackendService.loadEntityList(id, "/api/msets/", "/ressources-urls").subscribe(r => this.ressourceUrlsList = r);
  }

  showTnInlet() {

  }

}
