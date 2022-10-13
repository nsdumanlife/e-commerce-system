const eventBus = require('./event-bus')
const Delivery = require('./delivery')

module.exports = class LogisticsManager {
  constructor() {
    eventBus.on('order created', (order, address) => {
      const delivery = new Delivery(order, address)

      eventBus.emit('delivery creatted', delivery)
    })
  }
  deliver(delivery) {
    delivery.order.delivered = true
    console.log('Delivery completed', delivery)
    return true
  }
}
