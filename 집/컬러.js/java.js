const  hexElements= [
    0,1,2,3,4,5,"A","B","C","D","E"
];








let hexcode = `#`;
function btnClickHandler() {
    let hexcode = `#`;
    for(let i=1; i<=6; i++) {
        hexcode += hexElements[getrandomnumber()];

    }
    document.querySelector(".content h1 span:first-child").innerText="12345"
document.querySelector(".content h1 span:last-child").innerText=`${hexcode}`;

document.body.style.backgroundColor =hexcode;
document.querySelector(".content h1 span:last-child").style.color=hexcode;

};

function getrandomnumber() {
    return Math.floor(Math.random() * (hexElements.length -1));
};
btnClickHandler();
document.querySelector(".content button").addEventListener("click",btnClickHandler);