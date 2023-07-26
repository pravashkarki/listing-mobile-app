import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-e5758-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const  database = getDatabase(app)
const shoppingListInDb = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEL = document.getElementById("shopping-list")
console.log(shoppingListEL)
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDb, inputValue)
    clearinputFieldEl()
    appendItemToShoppingListEL(inputValue)
})

function clearinputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEL(inputValue) {
    shoppingListEL.innerHTML += `<li> ${inputValue} </li>`
}