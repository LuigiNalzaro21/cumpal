import {leftDiv} from "./info.js"
import {rightDiv} from "./img.js"

let container = document.getElementById("container")

const data = {
    title : "Picture of 2 dogs",
    para : "This captivating image depicts two joyful dogs frolicking under the warm sunlight of a beautiful day. Their fur glistens with golden hues as they embrace the freedom of the outdoors. Against the backdrop of clear skies, their playful interaction adds an enchanting charm to the serene scene.",
    button1 : "Button 1",
    button2 : "Button 2",
    button3 : "Button 3",
    button4 : "Button 4",
    dogimage : "pexels-photo-1108099.jpeg",
}

const {title, para, button1, button2, button3, button4, dogimage} = data

container.append(leftDiv(title, para, button1, button2, button3, button4))
container.append(rightDiv(dogimage))