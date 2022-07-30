import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {ScannerShort} from "../models/scannerShort";
import {SerializedScanner} from "../models/serialzedScanner";
import {Mset} from "../models/mset";
import {Location} from "../models/location";
import {ScanningResult} from "../models/ScanningResult";

@Component({
  selector: 'app-scanner-fits',
  templateUrl: './scanner-fits.component.html',
  styleUrls: ['./scanner-fits.component.scss']
})
export class ScannerFitsComponent implements OnInit, OnChanges {

  @Input() url: string = "";
  scannerShorts: ScannerShort[] = [];
  ssdummy: SerializedScanner = new SerializedScanner(0, "")
  mset: Mset = new Mset(0, "")
  locations: Location[] = [];

  constructor(private scannerService: EntityBackendService<ScannerShort>,
              private scannerService2: EntityBackendService<ScanningResult>
  ) {
    this.scannerService2.setApiName(this.ssdummy)
  }

  ngOnInit(): void {
    // this.scannerService.setApiName()
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

  scan(id: number) {
    this.scannerService2.loadOtherEntity(id, "/scan", "url", this.url)
      .subscribe(scanningResult => {
        this.mset = Mset.copy(scanningResult.mset);
        this.locations = scanningResult.locations;
      });
  }

}
