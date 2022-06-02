import { MikroORM } from "@mikro-orm/core";
import type { SqliteDriver } from "@mikro-orm/sqlite";

import ormConfig from "../mikro-orm.config";

const orm = await MikroORM.init<SqliteDriver>(ormConfig);

export const getEM = () => orm.em.fork();
