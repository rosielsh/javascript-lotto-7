import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class BonusNumberValidator {
  static checkValid(bonusNumber, winningNumbers) {
    this.#isNotNumber(bonusNumber);
    this.#isOverRange(bonusNumber);
    this.#isDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
  }

  static #isNotNumber(bonusNumber) {
    if (Validator.isNotNumber(bonusNumber)) {
      generateError("[ERROR]");
    }
  }

  static #isOverRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      generateError("[ERROR]");
    }
  }

  static #isDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const combineArr = [bonusNumber, ...winningNumbers];
    if (Validator.hasUniqueNumber(combineArr)) {
      generateError("[ERROR]");
    }
  }
}

export default BonusNumberValidator;
