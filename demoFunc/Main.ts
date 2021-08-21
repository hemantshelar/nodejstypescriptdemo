import { v4 as uuidv4 } from "uuid";
export class Main {
  constructor(private allDependencies: any) {
    console.log(allDependencies.p);
  }
  newGuid(): string {
    let result = uuidv4();
    return result;
  }

  getId(): string{
    let result = "";
    result = this.allDependencies.id;
    return result;

  }
}
