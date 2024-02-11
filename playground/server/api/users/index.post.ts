import { getRepository } from "#typeorm";

export interface CreateUser {
  firstName: string;
  lastName: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateUser>(event);
  const userRepository = await getRepository(User);

  const user = userRepository.create({
    firstName: body.firstName,
    lastName: body.lastName,
  });

  await userRepository.save(user);

  return {
    user: user,
  };
});
