import { useRepository } from "#typeorm";
import { User } from "~/db/entities/user.entity";

export default defineEventHandler(async (event) => {
  const repository = await useRepository(event);

  const userRepository = repository.getRepository(User);

  const user = userRepository.create({
    id: 1,
    firstName: "John",
    lastName: "Doe",
  });

  await userRepository.save(user);

  return {
    user: user,
  };
});
