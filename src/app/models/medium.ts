import {Entity} from "./entity";
import {Mset} from "./mset";

export class Medium implements Entity{

  id: number |undefined;
  name: string;
  created_at: Date | undefined;
  updated_at: Date | undefined;
  mset: Mset |undefined;

  constructor(id: number|undefined, name: string) {
    this.id = id;
    this.name = name;
  }

}
