function barCtrl($scope) {
  $scope.menu = menu;
  $scope.barkeeper = barkeeper;
  $scope.order = new Order();
  
  barkeeper.accept = function(order) {
	  var drinks = [];
	  for (var item in order.items){
		  drinks.push(new Tschunk());
		  console.log("Sorry, cannot create other drinks, yet!");
	  }
	  return drinks;
  };

  $scope.drinks = [];
  
  // place order for drinks
  // clear order
  $scope.placeOrder = function(){
	  this.drinks = barkeeper.accept(this.order);
	  this.order = new Order();
  }
  
  // drinkUp
  $scope.drinkUp = function(){
	  this.drinks = [];
  }
}