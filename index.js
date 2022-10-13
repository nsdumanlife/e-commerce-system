require('./payment-processor')
require('./invoice-manager')
require('./order-manager')

const User = require('./user')
const Inventory = require('./inventory')
const Product = require('./product')
const LogisticsManager = require('./logistics-manager')
const analyticsManager = require('./analytics-manager')

const eventBus = require('./event-bus')

eventBus.on('delivery created', (delivery) => {
  logisticsManager.deliver(delivery)
})

const inventory = new Inventory()
const logisticsManager = new LogisticsManager()

const camera = new Product('Video camera', 999.99)
const numan = new User()

inventory.addProduct(camera)
inventory.addProduct(camera)

numan.addBalance(2000)

numan.buy(camera)
numan.buy(camera)
numan.buy(camera)

analyticsManager.printActions()

console.log(numan)
