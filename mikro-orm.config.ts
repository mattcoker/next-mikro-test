import "reflect-metadata";
import { config } from "dotenv";
import { Options } from "@mikro-orm/core";
import type { SqliteDriver } from "@mikro-orm/sqlite";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

config({ path: "./.env.local" });

const ormConfig: Options<SqliteDriver> = {
  dbName: ":memory:",
  type: "sqlite",
  entities: ["./db/entities/*.entity.ts"],
  metadataProvider: TsMorphMetadataProvider,
};

export default ormConfig;
