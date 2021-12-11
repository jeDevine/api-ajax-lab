let body = document.querySelector("#body")

fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data =>{
    console.log(data.data);
    for(let i=0; i<data.data.children.length; i++){
    let box = document.createElement("div");
    box.id = "box";
    let name = data.data.children[i].data.name;
    let titler = data.data.children[i].data.title;
    let permaLink = data.data.children[i].data.permalink;
    let link = "http://reddit.com" + permaLink;
    let image = data.data.children[i].data.thumbnail;
    // box.innerHTML = `<br>name: ${name}<br> Title: ${titler}<br> Link: ${link}<br> image: ${image}<br>`;
    let userName = document.createElement("h4");
    let theTitle = document.createElement("h1");
    let theImage = document.createElement("img");
    theImage.setAttribute("src", image)
    let theLink = document.createElement("a");
    theLink.setAttribute("href", link)
    userName.append(name);
    theTitle.append(titler);
    theImage.append(image);
    theLink.append(link);
    box.appendChild(userName);
    box.appendChild(theTitle);
    box.appendChild(theImage);
    box.appendChild(theLink);
    body.appendChild(box);
    }
}).catch(err => {
    console.log("the error is: ", err)
})
