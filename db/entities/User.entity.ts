import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  createdAt?: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt?: Date = new Date();
}
