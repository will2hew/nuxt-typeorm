import { H3Event } from "h3";
import { DataSource } from "typeorm";
import type { ModuleOptions } from "../../module";

export const useRepository = async (event: H3Event) => {
  const config = useRuntimeConfig().public.typeorm as ModuleOptions;

  let datasource = event.context?.typeorm as DataSource | undefined;

  if (!datasource) {
    datasource = new DataSource(config.connection);
    await datasource.initialize();
    event.context.typeorm = datasource;
  }

  return datasource;
};
