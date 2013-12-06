var Drink = function() {
    this.ingredients = undefined;
};

var WodkaLemon = function() {
    this.ingredients = "Wodka and Lemon";
	this.name = "Wodka Lemon";
};

WodkaLemon.prototype = new Drink();

var CampariOrange = function() {
    this.ingredients = "Campari and Orange";
	this.name = "Campario Orange";
};
CampariOrange.prototype = new Drink();


var Tschunk = function() {
    this.ingredients = "Club Mate, Brown Sugar, Rum";
	this.picture = "img/tschunk.jpeg";
	this.name="Tschunk";
};
Tschunk.prototype = new Drink();

var CubaLibre = function() {
    this.ingredients = "Cola and Rum";
};
CubaLibre.prototype = new Drink();

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

// =====> to be implemented: Order
var Order = function() {
	this.items = [];
	this.add = function(drink) {
		this.items.push(drink);
	};
};

var barkeeper = {
    accept : function(order) {
        throw "not implemented yet";
    }
};



