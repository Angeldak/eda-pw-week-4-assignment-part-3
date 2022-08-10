console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (item) {
        basket.push(item);
        return true;
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

function ifFull() {

} //End ifFull

function removeItem() {

} //End removeItem

console.log("Basket is currently:", basket);
console.log("Adding item Apples and Peaches expects true and true:", addItem("Apples"), addItem("Peaches"));
console.log("Basket should now have Apples and Peaches:", basket);

console.log("Listing items below:")
listItems();

console.log("Emptying the basket:");
empty();
console.log("Basket is now:", basket);
