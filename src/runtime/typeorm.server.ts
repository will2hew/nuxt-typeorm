import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import "reflect-metadata";
import { DataSource } from "typeorm";
import type { ModuleOptions } from "../module";

export default defineNuxtPlugin({
  name: "nuxt-typeorm",
  enforce: "pre",
  async setup(nuxt) {
    const config = useRuntimeConfig().public.typeorm as ModuleOptions;

    const dataSource = new DataSource(config.connection);

    await dataSource.initialize();

    return {
      provide: {
        typeorm: {
          datasource: dataSource,
        },
      },
    };
  },
});
