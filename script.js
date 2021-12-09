let body = document.querySelector("#body")

fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data =>{
    console.log(data.data);
    for(let i=0; i<data.data.children.length; i++){
    let box = document.createElement("div");
    let name = data.data.children[i].data.name;
    let titler = data.data.children[i].data.title;
    let link = data.data.children[i].data.permalink;
    let image = data.data.children[i].data.thumbnail;
    box.innerHTML = `<br>name: ${name}<br> Title: ${titler}<br> Link: ${link}<br> image: ${image}<br>`;
    body.appendChild(box);
    }
})
