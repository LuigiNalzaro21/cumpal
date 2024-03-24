// Defining a function 'leftDiv' using arrow function syntax, which takes 'title', 'para', 'button1', 'button2', 'button3', and 'button4' parameters
const leftDiv = (title, para, button1, button2, button3, button4) => {
    // Creating a new div element
    let div = document.createElement("div");

    // Adding a class name 'classLeft' to the created div
    div.className = "classLeft";

    // Setting the inner HTML of the div to contain an h1 element with the 'title',
    // a p element with class 'para1' containing the 'para', and four button elements with text from 'button1' to 'button4'
    div.innerHTML = `<h1>${title}</h1>
                    <p class="para1">${para}</p>
                    <button>${button1}</button>
                    <button>${button2}</button>
                    <button>${button3}</button>
                    <button>${button4}</button>`;

    // Returning the created div element
    return div;
};

// Exporting the 'leftDiv' function so it can be imported and used in other files
export { leftDiv };
