let ramList = [];
var fetchedData = [];
let obj;
fetch('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops')
  .then(res => res.text())
  .then(data => {
    obj = data;
   })
  .then(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(obj, 'text/html');
    
    const cardDetail = doc.querySelectorAll('.description');
    const imgcontainer = doc.querySelector(".img-fluid").getAttribute("src");
    const imgURL = `https://webscraper.io${imgcontainer}`;
    
    cardDetail.forEach((desc) => {
        const prodDesc = desc.textContent;
        const prodImg = imgURL;
        const prodTitle = desc.previousElementSibling.textContent;
        const prodPrice = desc.previousElementSibling.previousElementSibling.textContent;

        const procMatch = prodDesc.match(/\b(?:Intel\s|AMD\s)?\w+\s\w+\b/);
        const proc = procMatch ? procMatch[0] : "Unknown";
        const ram = prodDesc.match(/\b\d+GB\b/);
        const ramValue = ram ? ram[0] : "Unknown";

        fetchedData.push({
            "productDesc": prodDesc,
            "productImage": prodImg,
            "productTitle": prodTitle,
            "productPrice": prodPrice,
            "productProcessor": proc,
            "productRAM": ramValue
        });
    });
    
    ramList = [...new Set(fetchedData.map(item => item.productRAM))];
    const ramBar = document.getElementById('categories');
    ramList.sort();
    console.log(ramList);   
    ramList.map((ArrayData)=>{
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category');
        categoryItem.classList.add(`${ArrayData}`);
        const btn = document.createElement('button');
        btn.setAttribute('id',ArrayData);
        btn.innerText = ArrayData;
        categoryItem.appendChild(btn);
        ramBar.appendChild(categoryItem);
    })
    
    
    fetchedData.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("card-text");
        container.innerHTML = 
        `<div class="card">
        <img src="${item.productImage}" alt="${item.productTitle}">
        <h2 class="productTitle">${item.productTitle}</h2>
        <div class="description">${item.productDesc}</div>
        <div class="itemPrice">Price: $${item.productPrice}</div>
        <div class="itemProcessor">Processor:${item.productProcessor}</div>
        <div class="itemRAM">RAM: ${item.productRAM}</div>
        <div>`;        
        document.querySelector('#cardContainer').appendChild(container);
    });
})
.catch(console.error);


//Filter item with search text
const searchBox = document.querySelector('#searchbar');
searchBox.addEventListener('keyup', function(){
    const searchValue = searchBox.value.toLowerCase();
    const items = document.querySelectorAll('.card-text');
    items.forEach(function(item){
        const itemProcessor = item.querySelector('.itemProcessor').textContent.toLowerCase();
        const itemRAM = item.querySelector('.itemRAM').textContent.toLowerCase();
        if(itemProcessor.includes(searchValue) || itemRAM.includes(searchValue)){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
});

//Filter item with category button
const parent = document.getElementById('categories');
parent.addEventListener('click', (e)=>{
    const filter = e.target.id.toLowerCase();
    const items = document.querySelectorAll('.card-text');
    items.forEach(function(item){
        const itemCategory = item.querySelector('.itemRAM').textContent.toLowerCase();    
        if(itemCategory.includes(filter) || filter == 'all'){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
})