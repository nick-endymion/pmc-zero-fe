import {Entity} from "./entity";
import {Medium} from "./medium";

export class Location implements Entity {

  id: number | undefined;
  name: string;
  uri: string;
  created_at: Date | undefined;
  updated_at: Date | undefined;

  media: Medium[] = [];

  constructor(id: number | undefined, name: string, uri: string) {
    this.id = id;
    this.name = name;
    this.uri = uri;
  }


}
