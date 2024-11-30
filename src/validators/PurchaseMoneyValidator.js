import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class PurchaseMoneyValidator {
  static checkValid(purchaseMoney) {
    this.#isNotNumber(purchaseMoney);
    this.#isNotThousandUnit(purchaseMoney);
    this.#isUnderThousand(purchaseMoney);
  }

  static #isNotNumber(purchaseMoney) {
    if (Validator.isNotNumber(purchaseMoney)) {
      generateError("[ERROR]");
    }
  }

  static #isNotThousandUnit(purchaseMoney) {
    if (purchaseMoney % 1000 !== 0) {
      generateError("[ERROR]");
    }
  }

  static #isUnderThousand(purchaseMoney) {
    if (purchaseMoney < 1000) {
      generateError("[ERROR]");
    }
  }
}

export default PurchaseMoneyValidator;
