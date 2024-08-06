const ul = document.querySelector("ul");
let tags=[];

function addTag(){
    let tag = document.getElementById("inputtext").value;
    document.getElementById("inputtext").value = "";
    ul.innerHTML='';
        if(tag.length > 1 && !tags.includes(tag)){
            tag.split(',').forEach(tag =>{
                tags.push(tag);
            });
        }
        tags.forEach(tag=>{
            let liTag = `<li class="tagItem ${tag}">${tag}<div onclick="removeTag(this, '${tag}')"><img class="cross_icon ${tag}-tag" src="cross.svg" alt=""></div></li>`;
            ul.insertAdjacentHTML("afterbegin",liTag);
        });
}

function removeTag(element, tag){
    let index = tags.indexOf(tag);
    tags.splice(index,1);

    element.parentElement.remove();

}
