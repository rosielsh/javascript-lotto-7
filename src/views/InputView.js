import { Console } from "@woowacourse/mission-utils";

class InputView {
  static readPurchaseMoney() {
    return Console.readLineAsync("구입금액을 입력해 주세요.");
  }

  static readWinningNumbers() {
    return Console.readLineAsync("당첨 번호를 입력해 주세요.");
  }

  static readBonusNumber() {
    return Console.readLineAsync("보너스 번호를 입력해 주세요.");
  }
}

export default InputView;
