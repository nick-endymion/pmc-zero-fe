import {Entity} from "./entity";
import {Location} from "./location";
import {Mset} from "./mset";

export class ScanningResult implements Entity{

  id: number |undefined;
  mset: Mset
  commonUrlStart: string;
  locations: Location[];

  constructor(mset: Mset, locations: Location[]) {
    this.mset = mset;
    this.commonUrlStart = "";
    this.locations = locations;
  }
}
