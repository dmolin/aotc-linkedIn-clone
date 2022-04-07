import { memoize } from "lodash";
import { atom } from "recoil";

export const atomById = memoize((id, defaults) => atom({
  key: `atom${id}`,
  default: defaults
}));
