//1
const list = document.querySelector("#categories");
const categoriesList = list.querySelectorAll(".item")
console.log(`Number of categories: ${categoriesList.length}`);


//2
categoriesList.forEach(element => { 

    const category = element.querySelector("h2");
    console.log(`Category: ${category.textContent}`)

    const quantity = element.querySelectorAll('li');
        console.log(`Elements: ${quantity.length}`)
}
)
