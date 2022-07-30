import {Entity} from "./entity";
import {Medium} from "./medium";

export class Mset implements Entity{

  id: number |undefined;
  name: string;
  created_at: Date | undefined;
  updated_at: Date | undefined;

  media: Medium[] = [];

  constructor(id: number|undefined, name: string) {
    this.id = id;
    this.name = name;
  }

  static copy(mset: Mset) : Mset{
    let ms = new Mset(mset.id, mset.name)
    ms.media = mset.media
    return ms
  }


}
