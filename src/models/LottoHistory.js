import Lotto from "./Lotto.js";

class LottoHistory {
  #lottoCount;
  #lottos;

  constructor(lottoCount) {
    this.#lottoCount = lottoCount;
    this.#lottos = [];
  }

  addLotto(numbers) {
    const newLotto = new Lotto(numbers);
    this.#lottos.push(newLotto);
  }

  getPurchaseHistory() {
    return {
      lottoCount: this.#lottoCount,
      lottos: this.#lottos,
    };
  }
}

export default LottoHistory;
