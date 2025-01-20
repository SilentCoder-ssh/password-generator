import randomElement from "@/shared/utils/random-element";
import { FnNames } from "@/shared/types/fn-names";

const generateFnNames = (number: number, array: FnNames) => {
  let funcs = [...array];
  const ite = number - array.length;
  for (let i = 0; i < ite; i++) {
    const elementRandom = randomElement(array);
    funcs = [...funcs, elementRandom];
  }
  return funcs;
};

export default generateFnNames;
