import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {Bookmark} from "../models/bookmark";
import {ScannerShort} from "../models/scannerShort";
import {find} from "rxjs";
import {SerializedScanner} from "../models/serialzedScanner";

@Component({
  selector: 'app-scanner-fits',
  templateUrl: './scanner-fits.component.html',
  styleUrls: ['./scanner-fits.component.scss']
})
export class ScannerFitsComponent implements OnInit, OnChanges {

  @Input() url: string = "";
  scannerShorts: ScannerShort[] = [];
  ssdummy: SerializedScanner = new SerializedScanner(0, "")

  constructor(private scannerService: EntityBackendService<ScannerShort>) {
  }

  ngOnInit(): void {
    if (this.url.length > 0)
      this.findScanner()
  }

  ngOnChanges(): void {
    if (this.url.length > 0)
      this.findScanner()
  }

  findScanner() {
    this.scannerService.searchEntity(this.ssdummy, this.url).subscribe(scanners => this.scannerShorts = scanners)
  }

}
