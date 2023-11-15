/*
 * Filename: complexCode.js
 * Content: This code demonstrates a complex implementation of a shopping cart and online payment system.
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Class representing a product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }
}

// Class representing a shopping cart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
    } else {
      console.error("Invalid product");
    }
  }

  removeProduct(productName) {
    const index = this.products.findIndex((product) => product.name === productName);
    if (index !== -1) {
      this.products.splice(index, 1);
    } else {
      console.error("Product not found");
    }
  }

  calculateTotal() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.calculateTotalPrice();
    }
    return totalPrice;
  }
}

// Class representing a payment system
class PaymentSystem {
  constructor() {
    this.balance = 10000;
  }

  processPayment(totalPrice) {
    if (this.balance >= totalPrice) {
      this.balance -= totalPrice;
      console.log("Payment successful!");
    } else {
      console.error("Insufficient balance");
    }
  }
}

// Main program
const cart = new ShoppingCart();
const paymentSystem = new PaymentSystem();

const product1 = new Product("iPhone 12", 999, 1);
const product2 = new Product("AirPods Pro", 249, 2);

cart.addProduct(product1);
cart.addProduct(product2);

const totalPrice = cart.calculateTotal();

console.log("Total price:", totalPrice);

paymentSystem.processPayment(totalPrice);

console.log("Payment system balance:", paymentSystem.balance);