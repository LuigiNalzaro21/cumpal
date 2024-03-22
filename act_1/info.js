

const myFunction = (title, paragraph, buttonName) => {
    let div = document.createElement("div")
    div.innerHTML = `<h1>${title}</h1>
                        <p class="para">${paragraph}</p>
                        <button>${buttonName}</button>
                        
                    `

    return div
}

export{myFunction}