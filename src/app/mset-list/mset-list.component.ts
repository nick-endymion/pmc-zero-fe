import { Component, OnInit } from '@angular/core';
import {Mset} from "../models/mset";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {EntityBackendService} from "../services/entity.backend.service";

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

  constructor(private msetService: EntityBackendService<Mset>) {
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


}
