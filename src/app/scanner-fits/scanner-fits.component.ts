import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {ScannerShort} from "../models/scannerShort";
import {Scanner} from "../models/Scanner";
import {Mset} from "../models/mset";
import {Location} from "../models/location";
import {ScanningResult} from "../models/ScanningResult";
import {DoubleEntityBackendService} from "../services/double.entity.backend.service";
import {SourceToScan} from "../models/sourceToScan";
import {ScrapingService} from "../services/scraping.service";

@Component({
  selector: 'app-scanner-fits',
  templateUrl: './scanner-fits.component.html',
  styleUrls: ['./scanner-fits.component.scss']
})
export class ScannerFitsComponent implements OnInit, OnChanges {

  @Input() url: string = "";
  @Input() bookmarkId: number|undefined;

  scannerShorts: ScannerShort[] = [];
  ssdummy: Scanner = new Scanner(0, "")
  mset: Mset = new Mset(0, "")
  locations: Location[] = [];
  commonUrlStart = "";
  scannerId = -1;

  constructor(private scannerService: EntityBackendService<ScannerShort>,
              private scannerService2: EntityBackendService<ScanningResult>,
              private locationService: EntityBackendService<Location>,
              private scrapingService: ScrapingService
  ) {
    this.scannerService2.setApiName(this.ssdummy)
    this.locationService.setApiName(new Location(undefined, "", ""))
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

  scan2(locationId: number, persist = false) {
    let sts = new SourceToScan(0)
    sts.locationId = locationId
    sts.scannerId = this.scannerId
    // sts.url = this.url
    sts.bookmarkId = this.bookmarkId
    sts.persist = persist
    this.scrapingService.scrape(sts).subscribe(
      sc => {
        this.mset = Mset.copy(sc.mset);
        this.commonUrlStart = sc.commonUrlStart;
        this.locations = sc.locations;
      }

    )
  }

  scan(scannerId: number) {

    this.scannerService2.loadOtherEntit(new Scanner(scannerId, ""), "/scan", "url", this.url)
      .subscribe(
        scanningResult => {
          let sc = scanningResult as ScanningResult
          this.mset = Mset.copy(sc.mset);
          this.commonUrlStart = sc.commonUrlStart;
          this.locations = sc.locations;
          this.scannerId = scannerId
        }
      )
    ;
  }

  createDefaultLocation() {
    let regex = /https?:\/\/[^\/]*/g
    let result = this.url.match(regex);
    if (result) {
      let url = result[0];
      alert(url);
      let location = new Location(undefined, url, url);
      this.locationService.saveEntity(location).subscribe(location => {
      })

    }
  }
}
