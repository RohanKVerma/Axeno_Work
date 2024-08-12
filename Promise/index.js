var fetchedData = [];

let obj;

// async function fetchData() {
//     return fetch('https://webscraper.io/test-sites/e-commerce/allinone/computers/tablets')
// }

fetch('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops')
  .then(res => res.text())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj);
    const parser = new DOMParser();
    const doc = parser.parseFromString(obj, 'text/html');
    console.log(doc);
    
    const cardDetail = doc.querySelectorAll('.description');
    const imgURL = "https://webscraper.io/images/test-sites/e-commerce/items/cart2.png";
    
    cardDetail.forEach((desc) => {
        const prodDesc = desc.textContent;
        const prodImg = imgURL;
        const prodTitle = desc.previousElementSibling.textContent;
        const prodPrice = desc.previousElementSibling.previousElementSibling.textContent;

        fetchedData.push({
            "productDesc": prodDesc,
            "productImage": prodImg,
            "productTitle": prodTitle,
            "productPrice": prodPrice
        });
        console.log(fetchedData);
    });
    
    fetchedData.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("card-text");
        container.innerHTML = 
        `<div class="card">
        <img src="${item.productImage}" alt="${item.productTitle}">
        <h2>${item.productTitle}</h2>
        <div class="description">${item.productDesc}</div>
        <div class="itemPrice">Price: $${item.productPrice}</div>
        <div>`;        
        document.querySelector('#cardContainer').appendChild(container);
    });
})
.catch(console.error);
