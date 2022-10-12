const AnalyticsManager = require('./analytics-manager')

module.exports = class PaymentProcessor {
  pay(user, product) {
    if (user.balance < product.price) {
      AnalyticsManager.track('payment unsuccessful')
      throw new Error('insufficient fund')
    }

    user.balance -= product.price
    AnalyticsManager.track('payment successful')
    return product.price
  }
}
