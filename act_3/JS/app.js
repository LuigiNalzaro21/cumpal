// Importing named exports 'upProf' from the file 'info.js'
// Importing named exports 'right', 'bckOne', 'bckTwo', 'bckThr' from the file 'img.js'
// Importing named export 'dwnProf' from the file 'card.js'
import { upProf } from "./info.js";
import { right, bckOne, bckTwo, bckThr } from "./img.js";
import { dwnProf } from "./card.js";

// First section data object containing information for the upper profile section
const fSec = {
    title: "Hello! Luigi", // Title for the upper profile section
    para: "This is an activity that was asked from us to do", // Paragraph for the upper profile section
    clickBtn: "Contact Me", // Text for the button in the upper profile section
    fImg: "4230990.jpg" // File name of the image for the upper profile section
};

// Second section data object containing information for the lower profile section
const sSec = {
    title1: "PROJECT COMPLETED", // Title for the lower profile section
    imgOne: "1764669.jpg", // File name of the first image for the lower profile section
    para1: "This image encapsulates Sung Jin Woo's transformative journey, showcasing the myriad experiences that have shaped his strength and character. It serves as a visual narrative of his growth and development, highlighting the challenges overcome and lessons learned along the way.", // Paragraph for the first image in the lower profile section
    fBtn: "Learn More", // Text for the first button in the lower profile section
    imgTwo: "3231246.png", // File name of the second image for the lower profile section
    para2: "In this evocative image, Sung Jin Woo engages in a decisive confrontation with Igris the Red-Blood, ultimately triumphing and incorporating him into his shadow army. It illustrates Sung Jin Woo's tactical acumen and the relentless pursuit of power that defines his journey as a hunter.", // Paragraph for the second image in the lower profile section
    sBtn: "Learn More", // Text for the second button in the lower profile section
    imgThr: "4230932.png", // File name of the third image for the lower profile section
    para3: "This captivating image captures Sung Jin Woo's remarkable evolution, showcasing his profound growth forged through countless battles. From vanquishing formidable foes to masterfully leading his Shadow Army through the daunting challenge of an S Rank Gate, his journey exemplifies unwavering determination and unparalleled strength.", // Paragraph for the third image in the lower profile section
    tBtn: "Learn More" // Text for the third button in the lower profile section
};

// Destructuring assignment to extract properties from the 'fSec' and 'sSec' objects
const { title, para, clickBtn, fImg } = fSec;
const { title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn } = sSec;

// Getting a reference to the container element with id 'sectionOne'
let container = document.getElementById("sectionOne");

// Getting a reference to the container element with id 'sectionTwo'
let containers = document.getElementById("sectionTwo");

// Appending the upper profile section content created from 'upProf' function to the container
container.append(upProf(title, para, clickBtn, fImg));

// Appending the lower profile section content created from 'dwnProf' function to the container
container.append(dwnProf(title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn));
