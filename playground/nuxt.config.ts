export default defineNuxtConfig({
  modules: ["../src/module"],
  typeorm: {
    type: "postgres",
    database: "store",
    username: "store-user",
    password: "password",
    synchronize: true,
    logging: false,
  },
  devtools: { enabled: true },
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
      },
    },
  },
});
