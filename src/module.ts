import {
  addServerImportsDir,
  addServerPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import defu from "defu";
import "reflect-metadata";
import type { DataSourceOptions } from "typeorm";

export type ModuleOptions = DataSourceOptions;

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-typeorm",
    configKey: "typeorm",
  },

  defaults: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    logging: true,
    entities: [],
  },

  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const config = nuxt.options.runtimeConfig || {};

    config.typeorm = defu(config.typeorm || {}, options);

    nuxt.hook("nitro:config", async (_config) => {
      _config.alias = _config.alias || {};
      _config.alias["#typeorm"] = resolve("./runtime/utilities");
    });

    addServerImportsDir(nuxt.options.serverDir + "/entities");
    addServerPlugin(resolve("./runtime/plugin"));
  },
});
