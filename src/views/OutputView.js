import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printPurchaseInfo() {}

  static printRankResult() {}

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
