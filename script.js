const submit=document.getElementById("now");

var divs=document.getElementById("downs");
let keyword="";
let page=1;



async function searchimage(){
    keyword=document.getElementById("texts").value;
    var image=document.getElementById("card");
    const api_key="B-Uta61wkEi2E4FeZ8QawyrQ-hfIGxgunJ_3_si-qP8";
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api_key}`

    const response = await fetch(url);
    const data=await response.json();
    console.log(data);

    let res=data.results;
    console.log(data);
  
for (let i = 0; i < res.length; i++) {
  console.log(res[i].urls.small);

var create= document.createElement("div");


create.innerHTML=
`<div class="img-card" style="width:50vh ; height: 50vh;display: flex;align-items: center;justify-content: center;" >
<img style="width: 40vh; height: 40vh;" id="card" src="${res[i].urls.small}" alt="image-1">
<a href="${res[i].links.download_location}" class="downloadbtn">
<img src="downloads.png" style="width: 3vh;" id="download" alt="download">
</a>
</div>`

divs.appendChild(create);



}

    
 




}



submit.addEventListener("click",(e)=>{
    e.preventDefault();
    var downs=document.getElementById("downs");
    let gettext=document.getElementById("texts").value;
    let options=document.getElementById("option");
let values=options[(options.value)-1].text;
let value=options.value;

let resultss=searchimage();
let res=resultss.results;
console.log(res);

// var imgmaking = Array.from({length:value},()=>

// `<div class="img-card" style="width:50vh ; height: 50vh;display: flex;align-items: center;justify-content: center;" >
// <img style="width: 40vh; height: 40vh;" id="card" class="loader" src="loading.png" alt="image-1">
// <a href="#" class="downloadbtn">
// <img src="downloads.png" style="width: 3vh;" id="download" alt="download">
// </a>
// </div>`
// ).join("");

// downs.innerHTML = imgmaking;
// console.log(imgmaking);




});