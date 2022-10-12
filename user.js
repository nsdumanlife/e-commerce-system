const Order = require('./order')
const AnalyticsManager = require('./analytics-manager')

module.exports = class User {
  orders = []
  balance = 0

  buy(paymentProcessor, inventory, invoiceManager, product) {
    AnalyticsManager.track('buying started')
    const payment = paymentProcessor.pay(this, product)
    inventory.removeProduct(product)
    const invoice = invoiceManager.issueInvoice(payment, this)
    const order = new Order(product, invoice)

    this.orders.push(product)
    AnalyticsManager.track('buying finished')
    return order
  }

  addBalance(amount) {
    this.balance += amount
  }
}
