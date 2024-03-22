const right = (prof) => {
    let div = document.createElement("div")
    div.className = "profOne"
    div.innerHTML = `<img src="./image/${prof}">`

    return div
}

const bckOne = (back1) => {
    let divO = document.createElement("div")
    divO.className = "profTwo"
    divO.innerHTML = `<img src="./image/${back1}">`

    return divO
}

const bckTwo = (back2) => {
    let divTw = document.createElement("div")
    divTw.className = "profThr"
    divO.innerHTML = `<img src="./image/${back2}">`

    return divTw
}

const bckThr = (back3) => {
    let divTh = document.createElement("div")
    divTh.className = "profFou"
    divO.innerHTML = `<img src="./image/${back3}">`

    return divTh
}

export {right, bckOne, bckTwo, bckThr}