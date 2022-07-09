import {Entity} from "./entity";

export class Bookmark implements Entity{

  id: number |undefined;
  name: string;
  url: string;
  mediumId: number |undefined;

  constructor(id: number|undefined, name: string, url: string, mediumId: number|undefined) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.mediumId = mediumId;
  }
}
