import ALPHABET from "@/shared/constant/alphabet";
import FRUITS from "@/shared/constant/fruits";
import SYMBOLS from "@/shared/constant/symbols";
import NUMBERS from "@/shared/constant/numbers";
import upper from "@/shared/utils/upper";
import randomElement from "@/shared/utils/random-element";
import { FnName } from "@/shared/types/fn-names";

export function factory(fnName: FnName) {
  switch (fnName) {
    case "normal":
      return randomElement(CONSTANTS.ALPHABET);
    case "uppercase":
      return upper(randomElement(CONSTANTS.ALPHABET));
    case "symbols":
      return randomElement(CONSTANTS.SYMBOLS);
    case "numbers":
      return randomElement(CONSTANTS.NUMBERS);
    case "fruits":
      return randomElement(CONSTANTS.FRUITS);
  }
}

export const CONSTANTS = {
  ALPHABET,
  FRUITS,
  SYMBOLS,
  NUMBERS,
};
