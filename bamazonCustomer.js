var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

// Start Function
function start() {
  // query the database
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
  // once you have the items, prompt the user for which item they'd like
  inquirer
    .prompt([
	    {
	    	name: "id",
	    	type: "input",
	    	message: "What is the ID of the product you would like to buy?",
	    	choices: function() {
	    		var idArray = [];
            	for (var i = 0; i < results.length; i++) {
            	  idArray.push(results[i].item_id);
            	}
            	return idArray;
	    		}
	    },
	    {
	    	name: "stock",
	    	type: "input",
	    	message: "How many units would like to buy?",
	    	choices: function() {
	    		var stockArray = [];
            	for (var i = 0; i < results.length; i++) {
            	  stockArray.push(results[i].stock_quantity);
            	}
            	return stockArray;
	    		}
	    }
    ])
    .then(function(answer) {
      // based on their answer, search store inventory for product & quantity
      // get the information of the chosen item
        var customerChoice;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.id) {
            customerChoice = results[i];
          }
        }
      // determine if quantity is in stock
      if (customerChoice.stock_quantity < answer.stock) {
          // quantity is in stock. Update db and let the user know
          connection.query(
            "UPDATE product SET ? WHERE ?",
            [
            {
                // stock_quantity - answer.quantity
              },
              {
              	item_id: customerChoice.item_id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Order placed successfully!");
              start();
            }
          );
      }
      else {
      	console.log("Insufficient quantity!")
      }
    })
  })
};

