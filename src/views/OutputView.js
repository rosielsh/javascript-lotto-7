import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printPurchaseInfo(lottoCount, lottos) {
    Console.print(`${lottoCount}개를 구매했습니다.\n`);

    const logs = lottos.map((lotto) => {
      return `[${lotto.getNumbers().join(", ")}]`;
    });

    Console.print(logs.join("\n"));
  }

  static printRankResult() {}

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
