import LottoController from "./controller/LottoController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    const views = {
      inputView: InputView,
      outputView: OutputView,
    };

    new LottoController(views).start();
  }
}

export default App;
