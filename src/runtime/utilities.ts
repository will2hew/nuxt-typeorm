import {
  DataSource,
  Repository,
  type EntityTarget,
  type ObjectLiteral,
} from "typeorm";
import { useDatasource } from "./connection";

export async function getRepository<T extends ObjectLiteral>(
  entity: EntityTarget<T>
): Promise<Repository<T>> {
  const datasource = await useDatasource();
  return datasource.getRepository(entity);
}

export async function getDatasource(): Promise<DataSource> {
  return useDatasource();
}
