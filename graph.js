var redraw, g, renderer, Alchemy;

/* only do all this when document has finished loading (needed for RaphaelJS) */
window.onload = function() {
    
    var width = $(document).width() - 20;
    var height = $(document).height() - 60;
    
    g = new Graph();

    Alchemy = new LittleAlchemy({ graph: g });

    /* All the elements I've found so far */

    /*** Combinations of basic elements ***/
    Alchemy.addProduct({
        product: "Steam",
        ingredients: ["Fire", "Water"]
    });

    Alchemy.addProduct({
        product: "Lava",
        ingredients: ["Fire", "Earth"]
    });

    Alchemy.addProduct({
        product: "Energy",
        ingredients: ["Fire", "Air"]
    });

    Alchemy.addProduct({
        product: "Rain",
        ingredients: ["Air", "Water"]
    });

    Alchemy.addProduct({
        product: "Dust",
        ingredients: ["Air", "Earth"]
    });

    Alchemy.addProduct({
        product: "Mud",
        ingredients: ["Water", "Earth"]
    });

    Alchemy.addProduct({
        product: "PSI (pressure)",
        ingredients: ["Earth", "Earth"]
    });

    Alchemy.addProduct({
        product: "PSI (pressure)",
        ingredients: ["Air", "Air"]
    });

    Alchemy.addProduct({
        product: "Sea",
        ingredients: ["Water", "Water"]
    });
    /*** END - Combinations of basic elements ***/

    Alchemy.addProduct({
        product: "Geyser",
        ingredients: ["Steam", "Earth"]
    });

    Alchemy.addProduct({
        product: "Cloud",
        ingredients: ["Steam", "Air"]
    });


    /* layout the graph using the Spring layout implementation */
    var layouter = new Graph.Layout.Spring(g);

    /* draw the graph using the RaphaelJS draw implementation */
    renderer = new Graph.Renderer.Raphael('canvas', g, width, height);

    redraw = function() {
        layouter.layout();
        renderer.draw();
    };
};

