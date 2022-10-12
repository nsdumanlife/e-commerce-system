module.exports = class Invoice {
  payment = null
  user = null

  constructor(payment, user) {
    this.payment = payment
    this.user = user
  }
}
