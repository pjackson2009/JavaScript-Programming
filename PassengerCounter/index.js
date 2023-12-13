
// document.getElementById("welcome-el").innerText = ""
// document.getElementById("save-el").innerText = ""

let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let totalCountEl = document.getElementById("totalCount-el")
let count = 0
let totalCount = 0
let savedFlag = 0
let name = "Patrick Jackson"
let greeting = `Welcome ${name}!`
let listPrefix = ""
let starEmoji = String.fromCodePoint(0x2B50)
let errorParagraph = document.getElementById("error")
errorParagraph.textContent = ""

function increment(){
    count += 1
    totalCount += 1
    countEl.innerText = count
    totalCountEl.innerText = "Total: " + totalCount
    errorParagraph.textContent = ""
}

function save(){
    if (savedFlag == 0){
        listPrefix = ""
        savedFlag = 1
    } else{
        listPrefix = ", "
    }
    if (count == 0){
        errorParagraph.textContent = "Not saved - Entry of 0 people."
    } else{
        let countString = listPrefix + count
        saveEl.textContent += countString
        countEl.textContent = 0
        count = 0
    }
}

function welcome(){
    welcomeEl.innerText = starEmoji + " " + greeting + " " + starEmoji
}
welcome()
