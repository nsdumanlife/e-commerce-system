const eventBus = require('./event-bus')

module.exports = class Invoice {
  constructor(product, payment, address) {
    this.product = product
    this.payment = payment
    this.address = address
  }
}
