const name = document.getElementById("name");
const tagcontainer = document.querySelector(".tags");
const addName = () =>{
    const tag = document.createElement("div"); 
    tag.setAttribute("class","tag");


    tag.innerText = `Hey I am ${name.value}`;


    tagcontainer.append(tag);
}
