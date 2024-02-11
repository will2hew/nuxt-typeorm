import { useDatasource } from "./connection";

export default defineNitroPlugin(async (nitro) => {
  await useDatasource();
});
