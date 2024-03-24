// Defining a function 'myImage' using arrow function syntax, which takes an 'image' parameter
const myImage = (image) => {
    // Creating a new div element
    let div = document.createElement('div');

    // Setting the inner HTML of the div to contain an image element with a class 'image' and the source attribute set to the 'image' parameter
    div.innerHTML = `<img class="image" src="${image}">`;

    // Returning the created div element
    return div;
};

// Exporting the 'myImage' function so it can be imported and used in other files
export { myImage };
