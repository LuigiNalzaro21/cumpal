
const dwnProf = (title1, img1, para1, button1, img2, para2, button2, img3, para3, button3) => {
    let Lower = document.createElement("div");

    Lower.className = "dwnClass";

    Lower.innerHTML = `<h1 class="title">${title1}</h1>
                        <div class="container">
                            <div class="image-container1">
                                <img class="img1" src="./image/${img1}">
                                <p class="para1">${para1}</p>
                                <button class="button1">${button1}</button>
                            </div>
                            <div class="image-container2">
                                <img class="img2" src="./image/${img2}">
                                <p class="para2">${para2}</p>
                                <button class="button2">${button2}</button>
                            </div>
                            <div class="image-container3">
                                <img class="img3" src="./image/${img3}">
                                <p class="para3">${para3}</p>
                                <button class="button3">${button3}</button>
                            </div>
                        </div>`;

    return Lower;
};

export { dwnProf };
