const products = [
 { name: "Laptop", category: "Electronics" },
 { name: "Shirt", category: "" },
 { name: "Chair", category: "Furniture" }
];

let jsonProducts = JSON.stringify(products, null , 3)

let newProducts = JSON.parse(jsonProducts)

console.log(jsonProducts)

console.log(newProducts)