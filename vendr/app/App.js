import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { SnacksController } from './controllers/SnacksController.js';

const USE_ROUTER = false

class App {

  HomeController = new HomeController()

  SnacksController = new SnacksController()
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
