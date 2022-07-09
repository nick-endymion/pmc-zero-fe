import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Bookmark} from "../models/bookmark";
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core'
import {EntityBackendService} from "../services/entity.backend.service";
import {async} from "rxjs";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmark: Bookmark;

  constructor(private bookmarkService: EntityBackendService<Bookmark>) {
    this.bookmark = new Bookmark(9, "", "", undefined);
  }

  ngOnInit(): void {
    this.get()
  }

  newBookmark(b: Bookmark): Bookmark {
    console.log("ID " + b.id)
    return new Bookmark(b.id, b.name, b.url, b.mediumId);
  }

  get(): void {
    console.log("get ID " + this.bookmark.id)
    this.bookmarkService.loadEntity(this.bookmark).subscribe(bookmark => this.bookmark = this.newBookmark(bookmark));

  }

  save(): void {
    console.log("save ID " + this.bookmark.id)
    this.bookmarkService.saveEntity(this.bookmark).subscribe((bookmark: Bookmark) => this.bookmark = this.newBookmark(bookmark))
  }

  new(): void {
    this.bookmark = new Bookmark(undefined, "", "", undefined);
  }

  delete(): void {
    this.bookmarkService.deleteEntity(this.bookmark).subscribe((response) => this.bookmark = new Bookmark(undefined, "", "", undefined));
  }


  getTitle() {
  }

}
