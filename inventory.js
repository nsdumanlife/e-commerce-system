module.exports = class Inventory {
  products = new Map();

  addProduct(product) {
    if (!this.products.has(product)) {
      this.products.set(product, 0);
    }

    this.products.set(product, this.products.get(product) + 1);
  }

  removeProduct(product) {
    if (this.products.get(product) == 0) throw new Error("No stock.");
    this.products.set(product, this.products.get(product) - 1);
  }
};
