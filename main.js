let myh1 = document.getElementsByTagName("h1")[0];

function colorH1(params) {
    myh1.style.color= "white"
    myh1.style.backgroundColor= "red"
}
myh1.addEventListener("dblclick", colorH1);


let myh3 = document.getElementsByTagName("h3")[0];

function tailleH3(params) {
    let text = myh3.textContent;
    myh3.textContent = text.slice(0,-1);
}
myh3.addEventListener("mouseover",tailleH3 )

let mypara = document.getElementsByTagName("p")[0];

function colorP(params) {

    if (mypara.style.color === "gold" && mypara.style.backgroundColor === "blue") {
        mypara.style.color= "black";
        mypara.style.backgroundColor= "white";
    } 
    else {
        mypara.style.color= "gold";
        mypara.style.backgroundColor= "blue";
    }
}
mypara.addEventListener("click", colorP);