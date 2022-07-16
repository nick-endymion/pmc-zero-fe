import {Entity} from "./entity";

export class Medium implements Entity{

  id: number |undefined;
  name: string;
  created_at: Date | undefined;
  updated_at: Date | undefined;

  constructor(id: number|undefined, name: string) {
    this.id = id;
    this.name = name;
  }

}
