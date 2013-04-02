var LittleAlchemy = function(params) {
	var graph = params.graph;
	var numProducts = 0;

	/* Basic Elements */
    graph.addNode("Air");
    graph.addNode("Water");
    graph.addNode("Fire");
    graph.addNode("Earth");

	var addProduct = function(args) {
		var product = args.product;
		var ingredient1 = args.ingredients[0];
		var ingredient2 = args.ingredients[1];

		graph.addNode(product);
		graph.addEdge(ingredient1, product, {directed: true, label: ("+ " + ingredient2)});
		graph.addEdge(ingredient2, product, {directed: true, label: ("+ " + ingredient1)});

		numProducts += 1;

		var textNode = document.createTextNode(numProducts);
		var numProductsSpan = document.getElementById('numProducts');
		if(numProductsSpan.hasChildNodes()) {
			numProductsSpan.removeChild(numProductsSpan.childNodes[0]);
		}
		numProductsSpan.appendChild(textNode);
	};

	var getNumProducts = function() {
		return numProducts;
	};

	return {
		addProduct: addProduct,
		getNumProducts: getNumProducts
	};
};