// Defining a function 'rightDiv' using arrow function syntax, which takes an 'image' parameter
const rightDiv = (image) => {
    // Creating a new div element
    let div = document.createElement("div");
    
    // Adding a class name 'classRight' to the created div
    div.className = "classRight";
    
    // Setting the inner HTML of the div to contain an image element with the source attribute set to the 'image' parameter
    div.innerHTML = `<img src="./assets/${image}">`;
    
    // Returning the created div element
    return div;
};

// Exporting the 'rightDiv' function so it can be imported and used in other files
export { rightDiv };
