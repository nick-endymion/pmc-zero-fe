import {Entity} from "./entity";

export class Bookmark implements Entity{

  id: number |undefined;
  name: string;
  url: string;
  mediumId: number |undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;

  constructor(id: number|undefined, name: string, url: string, mediumId: number|undefined) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.mediumId = mediumId;
  }

  static new() : Bookmark {
    return new Bookmark(undefined,"","", undefined)
  }
}
