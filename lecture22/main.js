let input = document.querySelector("input")
let btn= document.querySelector("button")
let ul = document.querySelector("ul")



let todo = []



btn.addEventListener("click", () => {
    if(input.value !== "")
    todo.push(input.value)
    addtodos()
    input.value =""
    
})

window.addEventListener("keypress", (e) => {
    if( e.key == "Enter") {
        if(input.value !== "")
        todo.push(input.value)
        
        addtodos()
        input.value= ""

    }
})

function addtodos() {
    ul.innerHTML = ""
    todo.forEach((el )=> {
        let li = document.createElement("li")
        li.textContent = el

        ul.append(li)
    })
}