### ⚠️ Under Active Development ⚠️

# Nuxt TypeORM

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module to make it easy to use TypeORM in your project

## Usage

### Installation

1. Add `nuxt-typeorm` dependency to your project

```bash
npm install nuxt-typeorm
```

2. Add `nuxt-typeorm` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-typeorm"],
});
```

3. Add your TypeORM and TypeScript configuration to `nuxt.config.ts`

```js
typeorm: {
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
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
      },
    },
  }
```

4. Create an entity

```js
// server/entities/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  firstName: string;

  @Column({ type: "varchar" })
  lastName: string;
}
```

5. Export the entities

```js
// server/entities/entities.ts
import { User } from "./user.entity";

export const entities = [User];
```

5. You're done! `nuxt-typeorm` provides a `getRepository` helper function

```js
// server/api/users.get.ts

import { getRepository } from "#typeorm";

export default defineEventHandler(async (event) => {
  const userRepository = await getRepository(User);

  const users = await userRepository.find();

  return {
    users,
  };
});
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-typeorm/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-typeorm
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-typeorm.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-typeorm
[license-src]: https://img.shields.io/npm/l/nuxt-typeorm.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-typeorm
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
