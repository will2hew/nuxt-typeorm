import "reflect-metadata";
import { User } from "./server/entities/user.entity";

export default defineNuxtConfig({
  ssr: false,
  modules: ["../src/module"],
  typeorm: {
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entityFunction: () => [User],
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
