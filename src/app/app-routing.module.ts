import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./bookmarks/bookmarks.component";
import {BookmarkListComponent} from "./bookmark-list/bookmark-list.component";

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'bookmarks/:id', component: BookmarksComponent},
  {path: 'bookmark-list', component: BookmarkListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
