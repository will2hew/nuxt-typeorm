import "reflect-metadata";
import { User } from "./db/entities/user.entity";

export default defineNuxtConfig({
  ssr: false,
  modules: ["../src/module"],
  typeorm: {
    connection: {
      type: "sqlite",
      database: "db.sqlite",
      synchronize: true,
      logging: true,
      entities: ["db/entities/*.entity.ts", User],
    },
  },
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        strictPropertyInitialization: false,
      },
      include: ["../db/**/*.entity.ts"],
    },
  },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
          },
        },
      },
    },
    typescript: {
      tsConfig: {
        compilerOptions: {
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          strictPropertyInitialization: false,
        },
        include: ["../db/**/*.entity.ts"],
      },
    },
  },
});
