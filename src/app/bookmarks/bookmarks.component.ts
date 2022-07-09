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
    this.bookmark = new Bookmark(8, "", "");
  }

  ngOnInit(): void {
    this.get()
  }

  newBookmark(b: Bookmark): Bookmark {
    return new Bookmark(b.id, b.name, b.url);
  }

  get(): void {
    this.bookmarkService.loadEntity(this.bookmark).subscribe(bookmark => this.bookmark = this.newBookmark(bookmark));

  }

  save(): void {
    this.bookmarkService.saveEntity(this.bookmark).subscribe((bookmark: Bookmark) => this.bookmark = bookmark)
  }

  getTitle() {
  }

}
