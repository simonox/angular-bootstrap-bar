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
  $scope.place = function (order) {
	  $scope.drinks = $scope.drinks.concat(barkeeper.accept(order));
	  $scope.order = new Order();
  }
  
  $scope.drinkUp = function() {
	  $scope.drinks = [];
  }
}