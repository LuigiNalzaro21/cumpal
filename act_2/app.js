// Importing named exports 'leftDiv' and 'rightDiv' from the files 'info.js' and 'img.js'
import { leftDiv } from "./info.js";
import { rightDiv } from "./img.js";

// Getting a reference to the container element with id 'container'
let container = document.getElementById("container");

// Object containing data for the content
const data = {
    title: "Picture of 2 dogs", // Title for the content
    para: "This captivating image depicts two joyful dogs frolicking under the warm sunlight of a beautiful day. Their fur glistens with golden hues as they embrace the freedom of the outdoors. Against the backdrop of clear skies, their playful interaction adds an enchanting charm to the serene scene.", // Paragraph describing the image
    button1: "Button 1", // Text for button 1
    button2: "Button 2", // Text for button 2
    button3: "Button 3", // Text for button 3
    button4: "Button 4", // Text for button 4
    dogimage: "pexels-photo-1108099.jpeg", // File name of the dog image
};

// Destructuring assignment to extract properties from 'data'
const { title, para, button1, button2, button3, button4, dogimage } = data;

// Appending the left content created from 'leftDiv' function to the container
container.append(leftDiv(title, para, button1, button2, button3, button4));

// Appending the right content created from 'rightDiv' function to the container
container.append(rightDiv(dogimage));
