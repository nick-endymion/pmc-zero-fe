import {Component, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {Bookmark} from "../models/bookmark";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: Bookmark[] = new Array()
  bookmark: Bookmark = Bookmark.new();
  searchTerm: string = "";
  searchInput: string = "";
  fireInput = new Subject<string>();
  spinner = false;


  constructor(private bookmarkService: EntityBackendService<Bookmark>) {
  }

  ngOnInit(): void {

    this.fireInput.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.spinner = true;
        this.bookmarkService.searchEntity(this.bookmark, this.searchTerm)
          .subscribe((bookmarks: Bookmark[]) => {
            this.bookmarks = bookmarks;
            this.spinner = false;
            console.log(this.bookmarks)
          });
      });
  }

  search(): void {
    this.bookmarkService.searchEntity(this.bookmark, this.searchTerm).subscribe(bookmarks => this.bookmarks = bookmarks);
  }

}
