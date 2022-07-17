import {Entity} from "./entity";
import {Medium} from "./medium";

export class SerializedScanner implements Entity{

  id: number |undefined;
  name: string;
  regex: string;
  example: string;
  serialization: string;

  constructor(id: number|undefined, name: string) {
    this.id = id;
    this.name = name;
    this.regex = "";
    this.example = "";
    this.serialization = "";
  }

  static copy(serializedScanner: SerializedScanner) : SerializedScanner{
    let ss = new SerializedScanner(serializedScanner.id, serializedScanner.name)
    ss.regex = serializedScanner.regex
    ss.example = serializedScanner.example;
    ss.serialization = serializedScanner.serialization;
    return ss
  }


}
