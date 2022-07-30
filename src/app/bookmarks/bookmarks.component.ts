import {Component, OnInit, ViewChild} from '@angular/core';
import {Bookmark} from "../models/bookmark";
import {EntityBackendService} from "../services/entity.backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Mset} from "../models/mset";
import {ScannerFitsComponent} from "../scanner-fits/scanner-fits.component";


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmark: Bookmark;
  @ViewChild(ScannerFitsComponent)
  scannerFitsComponent: ScannerFitsComponent | undefined;

  constructor(private bookmarkService: EntityBackendService<Bookmark>,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.bookmark = new Bookmark(undefined, "", "", undefined);
    bookmarkService.setApiName(this.bookmark)
    this.route.params.subscribe(params => {
        console.log(params);
        let id = +params['id'];
        if (id) {
          this.bookmark.id = id;
          this.get();
        }
      }
    );

    this.route.queryParams.subscribe(params => {
        let url = params['url'];
        let title = params['title'];
        if (url) {
          this.findByUrl(url)
          this.bookmark.url = url;
          this.bookmark.name = title;
        }
      }
    )

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


  findByUrl(url: string) {
    this.bookmarkService.findEntityBy("url", url).subscribe((bookmarks) => this.handle(bookmarks))
  }

  handle(b: Bookmark[]) {
    if (b.length === 0)
      return
    if (b.length > 1)
      alert("Already more than one Bookmarks exist for this URL. Taking the first.")
    this.bookmark = this.newBookmark(b[0]);
  }

  checkMset(): boolean {
    if (this.scannerFitsComponent != undefined) {
      return this.scannerFitsComponent.mset.media.length > 0
    }
    return false;
  }

}
