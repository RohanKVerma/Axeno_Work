let obj;
fetch('https://fakestoreapiserver.reactbd.com/walmart')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
   .then(() => {
    const cardContainer = document.querySelector('.cardContainer');
    obj.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('isnew',item.isNew)
        const top_details = document.createElement('div');
        top_details.classList.add('top_details');
        top_details.innerHTML=
            `<div  class="brand">${item.brand}</div>
            <div class="category">${item.category}</div>`;
        card.appendChild(top_details);
        const imgHolder = document.createElement('div');
        imgHolder.classList.add('imageHolder');
        const image = document.createElement('img');
        image.setAttribute("src",item.image);
        image.setAttribute("alt",item.title);
        imgHolder.appendChild(image);
        // imgHolder.innerHTML=
        // `<img src ="${item.image}" alt = "${item.title}"`;
        card.appendChild(imgHolder);
        const productDetails = document.createElement('div');
        productDetails.classList.add('productDetails');
        productDetails.innerHTML=
        `<div class="title">${item.title}</div>
         <div class="price">$ ${item.price}</div>
         <div class="description">${item.des}</div>`;
         card.appendChild(productDetails);
         cardContainer.appendChild(card);


    const checkbox = document.querySelector('.checkbox #isNewBox');
    const cards = document.querySelectorAll('.card');
    
    checkbox.addEventListener('click',function(){
    if(!checkbox.hasAttribute('checked')){
        checkbox.setAttribute('checked','');
        cards.forEach(function(card){
            if(card.isnew == 'true'){
                card.style.display = 'block';
            }else{
                card.style.display = 'none';
            }
        });
    }else{
        checkbox.removeAttribute('checked');
        cards.forEach(function(card){
            card.style.display = 'block';
        })
    }
})
    


    });

   })
   .catch(console.error); 

   const searchBox = document.querySelector('#searchbar');
searchBox.addEventListener('keyup', function(){
    const searchValue = searchBox.value.toLowerCase();
    const items = document.querySelectorAll('.card');
    if(searchValue.length > 2){
        items.forEach(function(item){
            const itemBrand = item.querySelector('.top_details .brand').textContent.toLowerCase();
            if(itemBrand.includes(searchValue)){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        });
    }else if(searchValue.length < 2 ){
        items.forEach(function(item){
            item.style.display = 'block';
        })
    }
});

