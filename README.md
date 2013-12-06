Angular-Beispielprojekt zum Grunt-Jasmine-Bar-Example
=====================================================

[![Build Status](https://travis-ci.org/simonox/grunt-jasmine-bar-example.png)](https://travis-ci.org/simonox/grunt-jasmine-bar-example)


Use Case
--------
Ein Barkeeper soll Getränke mixen. Genauer gesagt: Wenn ich bei einem Barkeeper eine Bestellung aufgebe, dann soll mir der Barkeeper die bestellten Cocktails mixen.

Technologie
-----------
Neben AgnularJS kommt BootStrap zum Einsatz, wie aktuell bei allen Projekten, wo man keine Zeit für ein eigenes Design investieren möchte.

Und in echt?
------------
Fangen wir mal mit dem Controller an. Unser Controller ist eine einfache JS-Funktion, die das $scope Objekt (unser ViewModel) nutzt, um der View Objekte zur Verfügung zustellen.

	function barCtrl($scope) {
	  $scope.menu = menu;
	  $scope.barkeeper = barkeeper;
	  $scope.order = new Order();
	  $scope.drinks = [];
	}
Als Model definieren wir am $scope Objekt ein Menu, die bestellbaren Drinks, ein Barkeeper und eine Order. Zusätzlich wird noch eine Liste für bestellte und gemixte Drinks erstellt. Das Model selbst sind einfach JS-Objekte wie z.B. das Menu Objekt.

	var menu = {
	    wodkaLemon: {
	        price: 4.50,
	        size: '4cl',
	        name: "Wodka Lemon"
	    },
	    campariOrange: {
	        price: 4.50,
	        size: '4cl',
	        name: "Campari Orange"
	    },
	    cubaLibre: {
	        price: 5.00,
	        size: '4cl',
	        name: "Cuba Libre"
	    }
	};

Um AngularJS in unserer Webseite zum bestellen von Drinks nutzen zu können, müssen wir das HTML Attribut ng-app an einem HTML Tag setzen. Der von diesem Tag umschlossene Code wird von AgularJS geparsed.

Welcher Controller genutzt werden soll, wird durch das HTML Attribut ng-controller definiert. Auch hier gilt, dass nur auf diesen Controller bzw. die Funktionen und das Model (ViewModel), innerhalb des Tags, an welchem dieses Attribut gesetzt ist, zugegriffen werden kann.

	<div class="container-fluid" ng-app ng-controller="barCtrl">
	  <div class="row-fluid">
	    <div class="span2">
	      <div class="well sidebar-nav">
	        <ul class="nav nav-list">
	          <li class="nav-header">Menu</li>
	          <!-- list the menu & add order -->
	      <li ng-repeat="drink in menu">
	        <a href="" ng-click="order.add(drink)">{{drink.name}}</a>
	      </li>
	        </ul>
	      </div><!--/.well -->
	    </div>
	  ...
	</div>

Jetzt können wir auf den Bar Controller  barCtrl  zugreifen und mit den Directiven ng-repeat, alle Drinks des Menus ausgeben und mit ng-click beim Klick auf einen Drink, diesen einer Order hinzufügen.

Directive ermöglichen den HTML Compiler von AngularJS DOM Elemente ein Verhalten zuzuweisen oder DOM Elemente und ihre Kinderelemente zu transformieren. Ergo stellen Directiven so etwas wie die Template Engine von AngularJS dar.

Als Funktionalität möchten wir außerdem, dass Bestellungen beim Barkeeper abgeben werden können, dass der Barkeeper Cocktails mixt und dass gemixte Cocktails ausgetrunken werden können.

Da in unserem kleinem BDD Beispiel der Barkeeper noch keine Cocktails mixen kann, implementieren wird das kurzerhand im Controller. Im echten Leben sollte das natürlich refactored werden. Was auch dem echten Leben entspricht, ist dass man ab und zu irgendwelche Berliner Hipster Barkeeper erwischt, die nur einen Cocktail können …


	barkeeper.accept = function(order) {
	  var drinks = [];
	  for (var item in order.items){
	    drinks.push(new Tschunk());
	    console.log("Sorry, cannot create other drinks, yet!");
	  }
	  return drinks;
	};

Die beiden weiteren Funktionalitäten werden direkt im Controller implementiert.

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
  
Alle bestellten Drinks einer Order können mit dem Directive ng-repeat dargestellt und mit ng-click dem Barkeeper  werden.

	<div class="span4">
	  <h2>My choice</h2>
	  <ul>
	    <li ng-repeat="orderedDrink in order.items">{{orderedDrink.name}}</li>
	  </ul>
	  <p>
	    <!-- call place order -->
	    <a class="btn" ng-click="placeOrder()" href="#">Order &raquo;</a>
	  </p>
	</div>

Und die gemixten Drinks können ausgetrunken werden.

	<div class="span5">
	  <h2>Served drinks</h2>
	    <ul class="unstyled">
	      <li ng-repeat="drink in drinks">
	        <img ng-src="{{drink.picture}}" width="80px" class="img-circle" />
	    <span class="badge badge-info">{{drink.name}}</span><br />
	    <br /><br />    
	       </li>
	    </ul>
	    <p>
	      <!-- drinkUp -->
	      <a class="btn" ng-click="drinkUp()" href="#">Drink up &raquo;</a>
	    </p>
</div>

Somit haben wir unseren gewünschten Use Case umgesetzt.
