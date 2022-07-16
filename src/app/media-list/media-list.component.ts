import {Component, Input, OnInit} from '@angular/core';
import {Medium} from "../models/medium";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  @Input()  media : Medium[];

  constructor() {
    this.media  = [];
  }

  ngOnInit(): void {
  }

}
