cardData = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Laptop" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Smartphone" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Headphones" },
    { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Running+Shoes" },
    { id: 5, name: "Yoga Mat", price: 29.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Yoga+Mat" },
    { id: 6, name: "Coffee Maker", price: 79.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Coffee+Maker" },
    { id: 7, name: "Blender", price: 49.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Blender" },
    { id: 8, name: "Novel", price: 14.99, category: "Books", image: "https://via.placeholder.com/250x200?text=Novel" },
];

//Dynamic category bar
const categoryBar = document.getElementById('categories');
const categoryList = [...new Set(cardData.map(item => item.category))];
categoryList.sort();
categoryList.map((ArrayData)=>{
    const categoryItem = document.createElement('div');
    categoryItem.classList.add('category');
    categoryItem.classList.add(`${ArrayData}`);
    const btn = document.createElement('button');
    btn.setAttribute('id',ArrayData);
    btn.innerText = ArrayData;
    categoryItem.appendChild(btn);
    categoryBar.appendChild(categoryItem);
})

//Dynamic item cards
const container = document.getElementById('itemContainer');
cardData.map((postData)=>{
    const item = document.createElement('div');
    item.classList.add('card');
    item.innerHTML=`<img src="${postData.image}"/>
                    <div class="card-body">
                    <h3 class="name">${postData.name}</h3>
                    <h3 class="price">$${postData.price}</h3>
                    <div class="item-category">${postData.category}</div>
                </div>`;
    container.appendChild(item);
})

//Filter item with search text
const searchBox = document.querySelector('#searchbar');
searchBox.addEventListener('keyup', function(){
    const searchValue = searchBox.value.toLowerCase();
    const items = document.querySelectorAll('.card');
    items.forEach(function(item){
        const itemName = item.querySelector('.card-body .name').textContent.toLowerCase();
        const itemCategory = item.querySelector('.item-category').textContent.toLowerCase();
        if(itemName.includes(searchValue) || itemCategory.includes(searchValue)){
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
    const items = document.querySelectorAll('.card');
    items.forEach(function(item){
        const itemCategory = item.querySelector('.item-category').textContent.toLowerCase();    
        if(itemCategory.includes(filter) || filter == 'all'){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
})

