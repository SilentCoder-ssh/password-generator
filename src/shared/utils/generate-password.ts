import shuffleArray from "@/shared/utils/shuffle-array";
import generateFnNames from "@/shared/utils/generate-fn-names";
import { factory } from "@/shared/constant";
import { FnNames } from "../types/fn-names";

export default function passwordGenerator(limit: number, array:FnNames) {
  const elements = generateFnNames(limit, array);
  const shuffleElements = shuffleArray(elements);
  const password = shuffleElements.reduce(
    (acc, val) => (acc += factory(val)),
    ""
  );
  return password;
}
