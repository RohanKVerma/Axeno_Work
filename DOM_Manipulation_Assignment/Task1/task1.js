const ul = document.querySelector("ul");
let tags=[];

const error = document.querySelector(".error_popup");

function addTag(){
    let tag = document.getElementById("inputtext").value;
    document.getElementById("inputtext").value = ""; 
        if(tag.length > 1 && !tags.includes(tag)){
            tag.split(',').forEach(tag =>{
                tag=tag.trim();
                if(tag.length > 1){
                    tags.push(tag);
                }else{
                     error.classList.replace("invisible","visible");
                }
            });
        }else{
            console.log("Tag length is empty or already same tag available.");
            error.classList.replace("invisible","visible");
        }
        ul.innerHTML='<input type="text" name="" id="inputtext">';
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
function checkError(){
    let inputText = document.getElementById("inputtext").value;
    if(error.classList.contains("visible")){
        if(inputText.length > 0){
            error.classList.replace("visible","invisible");
        }
    }
}
setInterval(checkError,100);
checkError();