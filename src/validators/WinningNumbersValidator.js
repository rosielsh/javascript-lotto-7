import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class WinningNumbersValidator {
  static checkValid(winningNumbers) {
    this.#isNotArray(winningNumbers);
    this.#isNotSixNumber(winningNumbers);
    this.#isContainNotNumber(winningNumbers);
    this.#isContainUniqueNumber(winningNumbers);
    this.#isContainOverRange(winningNumbers);
  }

  static #isNotArray(winningNumbers) {
    if (!Array.isArray(winningNumbers)) {
      generateError("[ERROR]");
    }
  }

  static #isNotSixNumber(winningNumbers) {
    if (winningNumbers.length !== 6) {
      generateError("[ERROR]");
    }
  }

  static #isContainNotNumber(winningNumbers) {
    if (Validator.containNotNumber(winningNumbers)) {
      generateError("[ERROR]");
    }
  }

  static #isContainUniqueNumber(winningNumbers) {
    if (Validator.hasUniqueNumber(winningNumbers)) {
      generateError("[ERROR]");
    }
  }

  static #isContainOverRange(winningNumbers) {
    if (winningNumbers.some((number) => number < 1 || number > 45)) {
      generateError("[ERROR]");
    }
  }
}

export default WinningNumbersValidator;
