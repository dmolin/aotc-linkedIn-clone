import _ from "lodash";

export function initials (name) {
  return _.compact((name || "").split(" ")).map(_.first).join("");
}
