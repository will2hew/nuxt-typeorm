import { entities, migrations, useRuntimeConfig } from "#imports";
import { DataSource } from "typeorm";

let AppDataSource: DataSource;

export async function useDatasource(): Promise<DataSource> {
  const config = useRuntimeConfig().typeorm;

  if (!AppDataSource) {
    AppDataSource = new DataSource({ ...config, entities, migrations });
    await AppDataSource.initialize();
  }

  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  return AppDataSource;
}
