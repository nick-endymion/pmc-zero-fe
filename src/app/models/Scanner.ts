import {Entity} from "./entity";
import {Medium} from "./medium";

export class Scanner implements Entity{

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

  static copy(scanner: Scanner) : Scanner{
    let ss = new Scanner(scanner.id, scanner.name)
    ss.regex = scanner.regex
    ss.example = scanner.example;
    ss.serialization = scanner.serialization;
    return ss
  }


}
