import {upProf} from "./info.js"
import {right, bckOne, bckTwo, bckThr} from "./img.js"
import {dwnProf} from "./card.js"


const fSec = {
    title : "Hello! Luigi",
    para : "This is an activity that was asked from us to do",
    clickBtn : "Contact Me",
    fImg : "4230990.jpg"
}

const sSec = {
    title1 : "PROJECT COMPLETED",
    imgOne : "1764669.jpg",
    para1 : "This image encapsulates Sung Jin Woo's transformative journey, showcasing the myriad experiences that have shaped his strength and character. It serves as a visual narrative of his growth and development, highlighting the challenges overcome and lessons learned along the way.",
    fBtn : "Learn More",
    imgTwo : "3231246.png",
    para2 : "In this evocative image, Sung Jin Woo engages in a decisive confrontation with Igris the Red-Blood, ultimately triumphing and incorporating him into his shadow army. It illustrates Sung Jin Woo's tactical acumen and the relentless pursuit of power that defines his journey as a hunter.",
    sBtn : "Learn More",
    imgThr : "4230932.png",
    para3 : "This captivating image captures Sung Jin Woo's remarkable evolution, showcasing his profound growth forged through countless battles. From vanquishing formidable foes to masterfully leading his Shadow Army through the daunting challenge of an S Rank Gate, his journey exemplifies unwavering determination and unparalleled strength.",
    tBtn : "Learn More"
}

const {title, para, clickBtn, fImg } = fSec

const { title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn} = sSec


let container = document.getElementById("sectionOne")
let containers = document.getElementById("sectionTwo")

container.append(upProf(title, para, clickBtn, fImg))
container.append(dwnProf(title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn))