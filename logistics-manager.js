module.exports = class LogisticsManager {
  deliver(delivery) {
    delivery.order.delivered = true
    console.log('Delivery', delivery)
    return true
  }
}
