// Function to create a div containing the upper profile section content
const upProf = (title, para, butClick, imgProf) => {
    // Creating a new div element
    let Upper = document.createElement("div");
    
    // Adding a class name 'upClass' to the created div
    Upper.className = "upClass";
    
    // Setting the inner HTML of the div to contain a title, paragraph, image, and button
    Upper.innerHTML = `<h1 class="upTitle">${title}</h1>
                        <p class="upPara">${para}</p>
                        <img class="upImage" src="./image/${imgProf}">
                        <button class="upButton">${butClick}</button>`;
    
    // Returning the created div element
    return Upper;
}

// Exporting the 'upProf' function so it can be imported and used in other files
export { upProf };
