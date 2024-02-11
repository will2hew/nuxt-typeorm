import { useDatasource } from "./connection";

type NitroAppPlugin = (nitro: NitroApp) => void;

function defineNitroPlugin(def: NitroAppPlugin): NitroAppPlugin {
  return def;
}
export default defineNitroPlugin(async () => {
  await useDatasource();
});
