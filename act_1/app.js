// Importing the named exports 'myFunction' and 'myImage' from the files 'info.js' and 'img.js'
import { myFunction } from "./info.js";
import { myImage } from "./img.js";

// Creating an object 'myObject' with properties for title, paragraph, image file name, and button name
const myObject = {
    title: "THREE DOGS", // Title for the content
    paragraph: "This vibrant image captures three joyful dogs enjoying a sunny day outdoors. With the radiant sun illuminating their surroundings, the dogs exude pure happiness as they explore their environment. Their playful demeanor and the warmth of the sunlight evoke a sense of bliss and companionship in this delightful scene.", // Paragraph describing the image
    myImg: "OIP.jpg", // File name of the image
    buttonName: "Contact Us" // Text for the button
};

// Destructuring assignment to extract properties from 'myObject'
const { title, paragraph, myImg, buttonName } = myObject;

// Getting a reference to the container element with id 'container'
let container = document.getElementById('container');

// Appending the image created from 'myImage' function to the container
container.append(myImage(myImg));

// Appending the content created from 'myFunction' function to the container
container.append(myFunction(title, paragraph, buttonName));
