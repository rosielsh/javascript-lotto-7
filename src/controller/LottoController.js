import LottoMachine from "../models/LottoMachine.js";
import RankCalculator from "../models/RankCalculator.js";
import InputHandler from "../utils/InputHandler.js";
import BonusNumberValidator from "../validators/BonusNumberValidator.js";
import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import WinningNumbersValidator from "../validators/WinningNumbersValidator.js";

class LottoController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async start() {
    const purchaseMoney = await InputHandler.repeatUntilValidInput(() => this.#getPurChaseMoney(), this.#outputView);

    const lottoMachine = new LottoMachine(purchaseMoney);
    lottoMachine.generateLotto();
    const history = lottoMachine.getLottoHistory();

    const { lottoCount, lottos } = history.getPurchaseHistory();
    this.#outputView.printPurchaseInfo(lottoCount, lottos);

    const winningNumbers = await InputHandler.repeatUntilValidInput(() => this.#getWinningNumbers(), this.#outputView);
    const bonusNumber = await InputHandler.repeatUntilValidInput(
      () => this.#getBonusNumber(winningNumbers),
      this.#outputView
    );

    const rankCalculator = new RankCalculator({ lottoCount, lottos }, winningNumbers, bonusNumber);
    const result = rankCalculator.calculate();

    const { ranks, profit } = result.getLottoRankResult();
    this.#outputView.printRankResult(ranks, profit);
  }

  async #getPurChaseMoney() {
    const purchaseMoney = await this.#inputView.readPurchaseMoney();
    PurchaseMoneyValidator.checkValid(purchaseMoney);
    return purchaseMoney;
  }

  async #getWinningNumbers() {
    const winningNumbers = await this.#inputView.readWinningNumbers();
    const convertedWinningNumbers = winningNumbers.split(",").map((x) => Number(x));
    WinningNumbersValidator.checkValid(convertedWinningNumbers);
    return convertedWinningNumbers;
  }

  async #getBonusNumber(winningNumbers) {
    const bonusNumber = await this.#inputView.readBonusNumber();
    const convertedBonusNumber = Number(bonusNumber);
    BonusNumberValidator.checkValid(convertedBonusNumber, winningNumbers);
    return convertedBonusNumber;
  }
}

export default LottoController;
