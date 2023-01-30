import { v4 as uuidv4 } from "uuid";

export class Todo {
  id: string;
  label: string;
  done: boolean;
  constructor(id: string, label: string, done: boolean) {
    this.id = id;
    this.label = label;
    this.done = done;
  }

  static create(label: string) {
    return new Todo(uuidv4(), label, false);
  }
}
