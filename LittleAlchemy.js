var LittleAlchemy = function(table) {

	var topRow = $(table.find('#top_row')[0]);
	var tableBody = $(table.find('tbody')[0]);

	var numProducts = 0;

	// Add basic elements
	var elements = ['Water', 'Fire', 'Air', 'Earth'];

	var expandTable = function(product) {
		$('<th/>', {
			class: 'top_row ' + product,
			'data-index': numProducts,
			text: product
		}).appendTo(topRow);

		var newRow = $('<tr/>', {
			class: 'row ' + product,
			'data-index': numProducts,
			'data-product': product
		});

		$('<th/>', {
			text: product
		}).appendTo(newRow);

		tableBody.append(newRow);

		var rows = $(".row");
		for(var rowIndex = 0; rowIndex < numProducts; rowIndex++) {
			var row = $(rows[rowIndex]);
			while(row.children('td').length < numProducts) {
				$('<td/>').appendTo(row);
			}
		}
	};

	for(var i = 0; i < elements.length; i++) {
		var element = elements[i];
		numProducts += 1;
		expandTable(element);
	}

	var addProduct = function(args) {
		var product = args.product;
		var ingredient1 = args.ingredients[0];
		var ingredient2 = args.ingredients[1];

		// Add product to the ingredient1's column
		var index = $(".top_row." + ingredient1).attr('data-index');
		var row = $(".row." + ingredient2);
		var cell = $(row.children()[index]);

		if(product) {
			cell.text(product);
		} else {
			cell.addClass('social ss-icon nothing');
			cell.text('close');
		}

		// Add product to the ingredient2's column
		if( ingredient1 !== ingredient2 ) {
			var index = $(".top_row." + ingredient2).attr('data-index');
			var row = $(".row." + ingredient1);
			var cell = $(row.children()[index]);

			if(product) {
				cell.text(product);
			} else {
				cell.addClass('social ss-icon nothing');
				cell.text('close');
			}
		}

		if(product !== null && elements.indexOf(product) < 0) {
			elements.push(product);
			numProducts += 1;
			expandTable(product);
		}
	};

	return {
		addProduct: addProduct
	};
};