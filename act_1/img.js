const myImage = (image) => {
    let div = document.createElement('div')
    div.innerHTML = `<img class="image" src="${image}">`
    return div
}

export {myImage}