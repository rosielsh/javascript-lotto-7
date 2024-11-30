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

  static printRankResult(ranks, profit) {
    Console.print("당첨 통계");
    Console.print("---");

    Console.print(`3개 일치 (5,000원) - ${ranks.first.getCount()}개`);
    Console.print(`4개 일치 (50,000원) - ${ranks.second.getCount()}개`);
    Console.print(`5개 일치 (1,500,000원) - ${ranks.third.getCount()}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranks.fourth.getCount()}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${ranks.fifth.getCount()}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
