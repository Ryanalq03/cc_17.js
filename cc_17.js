//Coding Challenge #17

//Helper function to display details
function logMessage(message) {
    const outputDiv = document.getElementById('output');
    // Append the message with a line break
    outputDiv.innerText += message + "\n";
  }
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

//Task 2 SalesRep Class

class SalesRep { //Creates class
    constructor(name) {
      this.name = name;
      this.clients = []; // Array of Customer objects
    }
    
    // Adds a customer to list of clients
    addClient(customer) {
      this.clients.push(customer);
    }
    
    // Finds the client by name and returns their total spent
    getClientTotal(name) {
      const client = this.clients.find(cust => cust.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }

//Task 3 VIP Customer
class VIPCustomer extends Customer { //Creates VIP Class
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel; // Added properties: 'Gold' or 'Platinum'
    }
    
    // Override getTotalSpent to add a 10% loyalty bonus
    getTotalSpent() {
      return super.getTotalSpent() * 1.10;
    }
  }
  
  // Testing Task 3:
  const vipCustomer = new VIPCustomer("Charlie", "charlie@example.com", "Gold");
  vipCustomer.addPurchase(400);
  vipCustomer.addPurchase(150);
  console.log("VIP Customer Created:", vipCustomer);
  console.log("VIP Charlie Total Spent with Bonus: $", vipCustomer.getTotalSpent().toFixed(2));