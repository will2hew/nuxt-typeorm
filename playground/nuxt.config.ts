export default defineNuxtConfig({
  ssr: false,
  modules: ["../src/module"],
  typeorm: {
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
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
