import LottoMachine from "../models/LottoMachine.js";
import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutView.js";

class LottoController {
  async execute() {
    // 사용자가 올바른 입력을 할 때까지 구입 금액 입력
    const purchaseMoney = await this.#repeatUntilCorrectPurchaseMoney();

    // 로또 머신을 생성
    const lottoMachine = new LottoMachine(purchaseMoney);

    // 로또 생성 후 생성된 로또 배열을 반환
    const lottoHistory = lottoMachine.generateLotto();

    // 로또 출력
    const purchaseHistory = lottoHistory.getPurchaseHistory();

    OutputView.printPurchaseInfo(purchaseHistory.lottoCount, purchaseHistory.lottos);
  }

  async #repeatUntilCorrectPurchaseMoney() {
    try {
      const purchaseMoney = await InputView.enterPurchaseMoney();
      PurchaseMoneyValidator.checkValid(purchaseMoney);
      return purchaseMoney;
    } catch (error) {
      return this.#repeatUntilCorrectPurchaseMoney();
    }
  }
}

export default LottoController;
