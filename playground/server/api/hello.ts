import { useRepository } from "#typeorm";
import { User } from "../../db/entities/user.entity";

export default defineEventHandler(async (event) => {
  const repository = await useRepository(event);

  const userRepository = repository.getRepository(User);

  return {
    // user: user,
  };
});
