export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-3">
        <div class="card" style="width: 18rem;">
          <img src="${this.imgUrl}" class="card-img-top" alt="Item to buy">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.price}</p>
              <button onclick="app.SnacksController.buy('SNACKNAME')" class="btn btn-primary">buy me</button>
            </div>
          </div>
        </div>
      `
  }

  get buttonHTMLTemplate() {
    return `<button onclick="app.SnacksController.buy('SNACKNAME')">Buy SNACKNAME</button>`
  }

}