import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
import {BookmarkListComponent} from "./bookmark-list/bookmark-list.component";
import {MsetListComponent} from "./mset-list/mset-list.component";
import {Mset} from "./models/mset";
import {MsetComponent} from "./mset/mset.component";
import {SerializedScannerComponent} from "./serialized-scanner/serialized-scanner.component";

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'bookmarks/:id', component: BookmarksComponent},
  {path: 'bookmark-list', component: BookmarkListComponent},
  {path: 'mset-list', component: MsetListComponent},
  {path: 'msets/:id', component: MsetComponent},
  {path: 'serializedScanner/:id', component: SerializedScannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
