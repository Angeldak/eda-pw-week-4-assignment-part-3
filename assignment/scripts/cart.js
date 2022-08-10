console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull()) {
        if (item) {
            basket.push(item);
            return true;
        }
    } else {
        console.log(`Basket is full! Could not add ${item}.`)
        return false;
    }
} //End addItem

function listItems() {
    basket.forEach((item) => {
        console.log(item);
    })
} //End listItems

function empty() {
    basket = [];
    console.log("Basket Emptied")
} // End empty

function isFull() {
    if (basket.length < maxItems) {
        return true;
    } else {
        return false;
    }
} //End isFull

function removeItem(item) {
    let location = basket.indexOf(item);
    if (location === -1) {
        console.log(null);
        return null;
    } else {
        let removedItem = basket.splice(location, 1);
        console.log(`Removed the item: ${removedItem}!`)
    }
} //End removeItem

console.log("Basket is currently:", basket);
console.log("Adding item Apples and Peaches expects true and true:", addItem("Apples"), addItem("Peaches"));
console.log("Basket should now have Apples and Peaches:", basket);

console.log("Listing items below:")
listItems();

console.log("Emptying the basket:");
empty();
console.log("Basket is now:", basket);

console.log("Adding 6 items. Expecting true 5 times and a false")
console.log(addItem("Steak"));
console.log(addItem("Potato"));
console.log(addItem("Sushi"));
console.log(addItem("Ice Cream"));
console.log(addItem("Soda"));
console.log(addItem("Ketchup"));
console.log("Basket is now", basket);
listItems();

console.log("Removing the Ice Cream, staying healthy!");
removeItem("Ice Cream");
console.log("Basket is now:", basket);
console.log("Removing an item we didn't get, Tofu. Expect null:", removeItem("Tofu"));

//Start of personal stretch goal - Check HTML
const addInput = document.querySelector("#addInput");
const removeInput = document.querySelector("#removeInput");
const addItemBtn = document.querySelector("#addItem");
const removeItemBtn = document.querySelector("#removeItem");
const emptyCart = document.querySelector("#emptyCart");
const updateList = document.querySelector("#updateList");
const list = document.querySelector("ul");
const listItem = document.querySelector("li");

function updateDisplay() {
    list.innerHTML = "";

    for (items of basket) {
        let newListItem = document.createElement("li");
        newListItem.innerText = items;
        list.appendChild(newListItem);
    }
}

addItemBtn.addEventListener("click", () => {
    addItem(addInput.value);
    addInput.value = "";
    updateDisplay();
})

emptyCart.addEventListener("click", () => {
    empty();
    list.innerHTML = "";
})

updateList.addEventListener("click", () => {
    updateDisplay();
})

removeItemBtn.addEventListener("click", () => {
    removeItem(removeInput.value);
    removeInput.value = "";

    updateDisplay();
})