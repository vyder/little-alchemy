jQuery(document).ready(function() {
	var table = $('#products');

	var LA = new LittleAlchemy(table);

	// Basic Reflective
	LA.addProduct({
		product: "Pressure",
		ingredients: ["Earth", "Earth"]
	});

	LA.addProduct({
		product: null,
		ingredients: ["Fire", "Fire"]
	});

	LA.addProduct({
		product: "Pressure",
		ingredients: ["Air", "Air"]
	});

	LA.addProduct({
		product: "Sea",
		ingredients: ["Water", "Water"]
	});

	// All combinations of basic

	LA.addProduct({
		product: "Lava",
		ingredients: ["Earth", "Fire"]
	});

	LA.addProduct({
		product: "Dust",
		ingredients: ["Earth", "Air"]
	});

	LA.addProduct({
		product: "Mud",
		ingredients: ["Earth", "Water"]
	});

	LA.addProduct({
		product: "Energy",
		ingredients: ["Fire", "Air"]
	});

	LA.addProduct({
		product: "Steam",
		ingredients: ["Fire", "Water"]
	});

	LA.addProduct({
		product: "Rain",
		ingredients: ["Air", "Water"]
	});

	
});
