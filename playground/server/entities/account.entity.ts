import { Column } from "typeorm";

export class Account {
  @Column({ type: "int", primary: true })
  id: number;

  @Column({ type: "varchar" })
  name: string;
}
