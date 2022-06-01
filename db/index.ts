import { MikroORM } from "@mikro-orm/core";
import type { SqliteDriver } from "@mikro-orm/sqlite";

import ormConfig from "../mikro-orm.config";

export const { em } = await MikroORM.init<SqliteDriver>(ormConfig);
