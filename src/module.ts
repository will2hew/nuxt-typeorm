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
    logging: true,
  },

  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const config = nuxt.options.runtimeConfig || {};

    // TODO: Fix the types issue here
    // @ts-ignore
    config.typeorm = defu(config.typeorm || {}, options);

    nuxt.hook("nitro:config", async (_config) => {
      _config.alias = _config.alias || {};
      _config.alias["#typeorm"] = resolve("./runtime/utilities");
    });

    addServerImportsDir(nuxt.options.serverDir + "/entities");
    addServerImportsDir(nuxt.options.serverDir + "/migrations");
    addServerPlugin(resolve("./runtime/plugin"));
  },
});
