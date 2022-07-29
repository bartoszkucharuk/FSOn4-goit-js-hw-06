//1
const categoryQuantity = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryQuantity.length}`);

//2
categoryQuantity.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
});