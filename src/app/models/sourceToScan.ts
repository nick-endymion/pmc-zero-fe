import {Entity} from "./entity";


export class SourceToScan {

  scannerId: number;
  url: String | undefined;
  bookmarkId: number | undefined;
  persist: boolean | undefined;
  locationId: number | undefined;

  constructor(sid: number) {
    this.scannerId = sid;
  }

}
