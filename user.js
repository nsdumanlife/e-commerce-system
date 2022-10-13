const eventBus = require('./event-bus')

module.exports = class User {
  orders = []
  balance = 0
  address = 'Address'

  constructor() {
    eventBus.on('payment successful', (product, payment) => {
      this.balance -= payment
    })

    eventBus.on('order created', (order) => {
      this.orders.push(order)
    })
  }

  buy(product) {
    eventBus.emit('buying started')
    eventBus.emit('pay', this.balance, product, this.address)
    eventBus.emit('buying finihed')
  }

  addBalance(amount) {
    this.balance += amount
  }
}
