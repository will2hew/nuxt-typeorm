import { useRepository } from "#typeorm";
import { randomInt } from "crypto";
import { User } from "~/server/entities/user.entity";

export default defineEventHandler(async (event) => {
  const repository = await useRepository(event);

  const userRepository = repository.getRepository(User);

  const user = userRepository.create({
    id: randomInt(1, 1000),
    firstName: "John",
    lastName: "Doe",
  });

  await userRepository.save(user);

  return {
    user: user,
  };
});
