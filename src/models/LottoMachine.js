import LottoHistory from "./LottoHistory.js";
import RandomGenerator from "./RandomGenerator.js";

class LottoMachine {
  #purchaseMoney;
  #lottoCount;
  #lottoHistory;

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
    this.#lottoCount = purchaseMoney / 1000;
    this.#lottoHistory = new LottoHistory(this.#lottoCount);
  }

  generateLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const generatedNumbers = RandomGenerator.generate(1, 45, 6);
      this.#lottoHistory.addLotto(generatedNumbers);
    }
  }

  getLottoHistory() {
    return this.#lottoHistory;
  }
}

export default LottoMachine;
