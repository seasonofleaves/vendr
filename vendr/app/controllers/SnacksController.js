import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";

export class SnacksController {
  constructor() {
    console.log('The snacks controller is working');
    this.drawSnacks()
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snacksHTML = ''
    snacks.forEach((snack) => snacksHTML += snack.cardHTMLTemplate)
    const snacksCardElm = document.getElementById('snacks-card')
    snacksCardElm.innerHTML = snacksHTML
  }

  addQuarter() {
    snacksService.addQuarter()
    this.drawCoins()
  }

  drawCoins() {
    const coins = AppState.money
    const coinsElm = document.getElementById('coinsCount')
    coinsElm.innerText = coins.toString()
  }

  buySnack(snackName) {
    snacksService.buySnack(snackName)
  }
}