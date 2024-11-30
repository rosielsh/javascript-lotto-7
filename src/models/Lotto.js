import { generateError } from "../utils/generateError.js";
import Validator from "../validators/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateUniqueNumber(numbers);
    this.#validateContainNotNumber(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      generateError("[ERROR]");
    }
  }

  #validateUniqueNumber(numbers) {
    if (Validator.hasUniqueNumber(numbers)) {
      generateError("[ERROR]");
    }
  }

  #validateContainNotNumber(numbers) {
    if (Validator.containNotNumber(numbers)) {
      generateError("[ERROR]");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
