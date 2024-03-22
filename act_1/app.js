import {myFunction} from "./info.js"
import {myImage} from "./img.js"

const myObject = {
    title : "THREE DOGS",
    paragraph : "This vibrant image captures three joyful dogs enjoying a sunny day outdoors. With the radiant sun illuminating their surroundings, the dogs exude pure happiness as they explore their environment. Their playful demeanor and the warmth of the sunlight evoke a sense of bliss and companionship in this delightful scene.",
    myImg : "OIP.jpg",
    buttonName : "Contact Us" 
}

const {title, paragraph, myImg, buttonName} = myObject

let container = document.getElementById('container')

container.append(myImage(myImg))
container.append(myFunction(title, paragraph, buttonName))