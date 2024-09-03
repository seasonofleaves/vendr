import { AppState } from "../AppState.js"

class SnacksService {

  addQuarter() {
    AppState.money++
    console.log('money!', AppState.money);

  }
  buySnack(snackName) {
    const snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
    //... Checks price, complete purchase or reject purchase
    // if (AppState.money < 1) {
    //   window.alert("Please put a coin into the machine, or pay off your debt")
    //   return
    // }

    console.log(snackToBuy)

  }
}

export const snacksService = new SnacksService