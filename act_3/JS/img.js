// Function to create a div containing a profile image
const right = (prof) => {
    // Creating a new div element
    let div = document.createElement("div");
    
    // Adding a class name 'profOne' to the created div
    div.className = "profOne";
    
    // Setting the inner HTML of the div to contain an image element with the source attribute set to the provided 'prof' parameter
    div.innerHTML = `<img src="./image/${prof}">`;

    // Returning the created div element
    return div;
};

// Function to create a div containing a background image for the first profile
const bckOne = (back1) => {
    // Creating a new div element
    let divO = document.createElement("div");

    // Adding a class name 'profTwo' to the created div
    divO.className = "profTwo";

    // Setting the inner HTML of the div to contain an image element with the source attribute set to the provided 'back1' parameter
    divO.innerHTML = `<img src="./image/${back1}">`;

    // Returning the created div element
    return divO;
};

// Function to create a div containing a background image for the second profile
const bckTwo = (back2) => {
    // Creating a new div element
    let divTw = document.createElement("div");

    // Adding a class name 'profThr' to the created div
    divTw.className = "profThr";

    // Setting the inner HTML of the div to contain an image element with the source attribute set to the provided 'back2' parameter
    divTw.innerHTML = `<img src="./image/${back2}">`;

    // Returning the created div element
    return divTw;
};

// Function to create a div containing a background image for the third profile
const bckThr = (back3) => {
    // Creating a new div element
    let divTh = document.createElement("div");

    // Adding a class name 'profFou' to the created div
    divTh.className = "profFou";

    // Setting the inner HTML of the div to contain an image element with the source attribute set to the provided 'back3' parameter
    divTh.innerHTML = `<img src="./image/${back3}">`;

    // Returning the created div element
    return divTh;
};

// Exporting the functions 'right', 'bckOne', 'bckTwo', 'bckThr' so they can be imported and used in other files
export { right, bckOne, bckTwo, bckThr };
