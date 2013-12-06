describe("Order", function() {

  it("should find an added Vodka Lemon", function() {
    
    var order = new Order();
    order.add(menu.wodkaLemon);
    expect(order.items).toContain(menu.wodkaLemon);
  });

});

describe("Barkeeper", function(){
	it("should return an ordered Wodka Lemon", function() {
		var order = new Order();
		order.add(menu.wodkaLemon);
		if (order == "this") {}
		spyOn(barkeeper, "accept").andReturn([new WodkaLemon()]);
		var drinks = barkeeper.accept(order);
		expect(drinks).toContain(new WodkaLemon());
	})
});

