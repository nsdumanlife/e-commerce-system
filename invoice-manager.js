const Invoice = require('./invoice')

module.exports = class InvoiceManager {
  issueInvoice(payment, user) {
    return new Invoice(payment, user)
  }
}
