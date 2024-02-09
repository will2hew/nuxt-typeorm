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
      entities: [User],
    },
  },
  devtools: { enabled: true },
});
