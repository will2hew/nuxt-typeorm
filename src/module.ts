import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import "reflect-metadata";
import type { DataSourceOptions } from "typeorm";

export interface ModuleOptions {
  connection: DataSourceOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-typeorm",
    configKey: "typeorm",
  },

  defaults: {
    connection: {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      logging: true,
      entities: [],
    },
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.typeorm = options;

    addPlugin(resolve("./runtime/typeorm.server"));

    nuxt.hook("nitro:config", async (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {};

      nitroConfig.alias["#typeorm"] = resolve("./runtime/services/repository");
    });
  },
});
