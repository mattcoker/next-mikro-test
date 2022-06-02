import "reflect-metadata";
import { config } from "dotenv";
import { Options, ReflectMetadataProvider } from "@mikro-orm/core";
import type { SqliteDriver } from "@mikro-orm/sqlite";

import { User } from "./db/entities";

config({ path: "./.env.local" });

const ormConfig: Options<SqliteDriver> = {
  dbName: "test.db",
  type: "sqlite",
  entities: [User],
  metadataProvider: ReflectMetadataProvider,
};

export default ormConfig;
