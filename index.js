const User = require('./user')
const Inventory = require('./inventory')
const Product = require('./product')
const PaymentProcessor = require('./payment-processor')
const InvoiceManager = require('./invoice-manager')
const LogisticsManager = require('./logistics-manager')
const Delivery = require('./delivery')
const AnalyticsManager = require('./analytics-manager')

const inventory = new Inventory()
const paymentProcessor = new PaymentProcessor()
const invoiceManager = new InvoiceManager()
const logisticsManager = new LogisticsManager()

const numan = new User()
const camera = new Product('Video camera', 999.99)
try {
  inventory.addProduct(camera)
  inventory.addProduct(camera)

  numan.addBalance(2000)

  const order1 = numan.buy(paymentProcessor, inventory, invoiceManager, camera)
  const order2 = numan.buy(paymentProcessor, inventory, invoiceManager, camera)

  const delivery1 = new Delivery(order1.product, numan)
  const delivery2 = new Delivery(order2.product, numan)

  logisticsManager.deliver(delivery1)
  logisticsManager.deliver(delivery2)
} catch (e) {
  console.log(e)
}
AnalyticsManager.printActions()

console.log(numan)
