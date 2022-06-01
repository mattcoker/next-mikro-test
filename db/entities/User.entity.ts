import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class State {
  @PrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
