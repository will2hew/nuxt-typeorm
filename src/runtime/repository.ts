import { useRuntimeConfig } from "#imports";
import { H3Event } from "h3";
import { DataSource } from "typeorm";
import * as entities from "../../playground/server/entities";
import type { ModuleOptions } from "../module";

export const useRepository = async (event: H3Event) => {
  const config = useRuntimeConfig().public.typeorm as ModuleOptions;
  let datasource = event.context?.typeorm as DataSource | undefined;

  if (!datasource) {
    datasource = new DataSource({ ...config, entities });
    await datasource.initialize();
    event.context.typeorm = datasource;
  }

  return datasource;
};
