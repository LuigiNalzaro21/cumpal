// Defining a function 'myFunction' using arrow function syntax, which takes 'title', 'paragraph', and 'buttonName' parameters
const myFunction = (title, paragraph, buttonName) => {
    // Creating a new div element
    let div = document.createElement("div");

    // Setting the inner HTML of the div to contain an h1 element with the 'title', a p element with class 'para' containing the 'paragraph', and a button element with the text 'buttonName'
    div.innerHTML = `<h1>${title}</h1>
                        <p class="para">${paragraph}</p>
                        <button>${buttonName}</button>`;
    
    // Returning the created div element
    return div;
};

// Exporting the 'myFunction' function so it can be imported and used in other files
export { myFunction };
