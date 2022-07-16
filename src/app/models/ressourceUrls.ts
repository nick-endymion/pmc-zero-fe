import {Entity} from "./entity";

export class RessourceUrls implements  Entity{

  id: number |undefined;
  name: string;
  primaryUrl: string;
  tnUrl: string;

  constructor(id: number, name: string, primaryUrl: string, tnUrl: string) {
    this.id = id;
    this.name = name;
    this.primaryUrl = primaryUrl;
    this.tnUrl = tnUrl;
  }
}
