import {Entity} from "./entity";
import {Medium} from "./medium";

export class ScannerShort implements Entity{

  id: number |undefined;
  name: string;
  regex: string;

  constructor(id: number|undefined, name: string) {
    this.id = id;
    this.name = name;
    this.regex = "";
  }
}
