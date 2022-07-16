import {Component, Input, OnInit} from '@angular/core';
import {RessourceUrls} from "../models/ressourceUrls";

@Component({
  selector: 'app-tns-view',
  templateUrl: './tns-view.component.html',
  styleUrls: ['./tns-view.component.scss']
})
export class TnsViewComponent implements OnInit {

  @Input()
  ressourceUrlsList: RessourceUrls[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
