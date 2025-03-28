//Coding Challenge #17

//Task 1 Customer Class
class Customer { //Creates Customer class
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }

    addPurchase(amount) { //Adds a purhcase amount
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() { //Gets totoal amount spent
        return this.purchaseHistory.reduce((acc, curr) => acc + curr, 0);
    }
  }
    
  //Task 1 Test
  const customer1 = new Customer("Alice", "alice@example.com");
customer1.addPurchase(100);
customer1.addPurchase(200);
console.log("Customer Created:", customer1);
console.log("Alice Total Spent: $", customer1.getTotalSpent());