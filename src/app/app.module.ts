import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import {CommonModule} from "@angular/common";
import { MsetListComponent } from './mset-list/mset-list.component';
import { MsetComponent } from './mset/mset.component';
import { MsetVisualListComponent } from './mset-visual-list/mset-visual-list.component';
import { MediaListComponent } from './media-list/media-list.component';
import { TnsViewComponent } from './tns-view/tns-view.component';
import { SerializedScannerComponent } from './serialized-scanner/serialized-scanner.component';
import { ScannerFitsComponent } from './scanner-fits/scanner-fits.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    BookmarkListComponent,
    MsetListComponent,
    MsetComponent,
    MsetVisualListComponent,
    MediaListComponent,
    TnsViewComponent,
    SerializedScannerComponent,
    ScannerFitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,

    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
