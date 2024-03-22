const upProf = (title, para, butClick, imgProf) => {
    let Upper = document.createElement("div");
    Upper.className = "upClass";
    Upper.innerHTML = `<h1 class="upTitle">${title}</h1>
                        <p class="upPara">${para}</p>
                        <img class="upImage" src="./image/${imgProf}">
                        <button class="upButton">${butClick}</button>`;
    return Upper;
}

export { upProf };
