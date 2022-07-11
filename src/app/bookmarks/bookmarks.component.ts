import {Component, OnInit} from '@angular/core';
import {Bookmark} from "../models/bookmark";
import {EntityBackendService} from "../services/entity.backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmark: Bookmark;

  constructor(private bookmarkService: EntityBackendService<Bookmark>,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.bookmark = new Bookmark(undefined, "", "", undefined);
    this.route.params.subscribe(params => {
        console.log(params);
        let id = +params['id'];
        if (id) {
          this.bookmark.id = id;
          this.get();
        }
      }
    );
  }


  ngOnInit(): void {
    // this.get()
  }

  newBookmark(b: Bookmark): Bookmark {
    console.log("ID " + b.id)
    let constructedBookmark = new Bookmark(b.id, b.name, b.url, b.mediumId);
    constructedBookmark.created_at = b.created_at;
    constructedBookmark.updated_at = b.updated_at;
    return constructedBookmark;
  }

  get(): void {
    console.log("get ID " + this.bookmark.id)
    this.bookmarkService.loadEntity(this.bookmark).subscribe(bookmark => this.bookmark = this.newBookmark(bookmark));
  }

  save(): void {
    console.log("save ID " + this.bookmark.id)
    this.bookmarkService.saveEntity(this.bookmark).subscribe((bookmark: Bookmark) => {
      this.bookmark = this.newBookmark(bookmark)
      this.router.navigate(['/bookmarks', this.bookmark.id])
    })

  }

  new(): void {
    this.bookmark = new Bookmark(undefined, "", "", undefined);
    this.router.navigate(['/bookmarks'])
  }

  delete(): void {
    this.bookmarkService.deleteEntity(this.bookmark).subscribe((response) => this.bookmark = new Bookmark(undefined, "", "", undefined));
  }


  getTitle() {
  }

}
