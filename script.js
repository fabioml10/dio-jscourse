// Basic
const phrase = "Japão é o melhor time do mundo."
console.log(phrase)
console.log(phrase.replace("Japão", " Brasil"))
console.log(phrase.toLocaleLowerCase())
console.log(phrase.toUpperCase())

// Array
const list = ["Uva", "Pera", "Maçã"]
console.log(list)
console.log(list.length)
console.log(list.reverse())
console.log(list[0])

console.log(list.push("Banana"))
console.log(list.pop())

console.log(list.join(" - "))

// Json
const fruit = {name: "Uva", color: "Roxa"}
console.log(fruit)
console.log(fruit.name)
console.log(fruit.color)

// Condicionals
// const age = prompt("Qual sua idade?")
const age = 18
if(age >= 18){
    console.log("Maior de idade.")
} else {
    console.log("Menor de idade.")
}

let count = 0
while(count <= 5){
    console.log(count)
    count++
}

for(let count = 5; count >= 0; count--){
    console.log(count)
}

const date = new Date()
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear())

// Functions
function sum(n1, n2){
    return n1 + n2
}

console.log(sum(5, 10))

// DOM

// function button01(){
//     alert(event.target.name + " clicado.")
// }

function button01(){
    document.getElementById("text").innerHTML = "Obrigado por clicar."
}

function redirect(){
    // Abre em outra aba
    window.open("https://www.google.com")

    // Mesma aba
    // window.location.href = "https://www.google.com.br"
}

function change(){
    event.target.innerHTML = "Passou!"
}

function back(){
    event.target.innerHTML = "Passe o mouse aqui."
}

function load(){
    alert("Página carregada.")
}

function changeOption(){
    alert(event.target.value)
}