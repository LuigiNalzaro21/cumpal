const leftDiv = (title, para, button1, button2, button3, button4) => {
    let div = document.createElement("div")
    div.className = "classLeft"
    div.innerHTML = `<h1>${title}</h1>
                    <p class="para1">${para}</p>
                    <button>${button1}</button>
                    <button>${button2}</button>
                    <button>${button3}</button>
                    <button>${button4}</button>
    
    `
    return div
}

export {leftDiv}