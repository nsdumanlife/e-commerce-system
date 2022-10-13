const eventBus = require('./event-bus')

class AnalyticsManager {
  actions = []

  constructor() {
    // eventBus.on('',(event) => this.track(event))
    eventBus.on('buying started', () => this.track('buying started'))
    eventBus.on('buying finished', () => this.track('buying finished'))
    eventBus.on('insufficient funds', () => this.track('insufficient funds'))
    eventBus.on('payment successful', () => this.track('payment successful'))
    eventBus.on('invoice created', () => this.track('invoice created'))
    eventBus.on('order created', () => this.track('order created'))
    eventBus.on('delivery created', () => this.track('delivery created'))
  }

  track(action) {
    this.actions.push({
      action,
      time: new Date(),
    })
  }

  printActions() {
    console.log(this.actions)
  }
}

module.exports = new AnalyticsManager()
