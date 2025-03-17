//this is my code

console.log("your code is linked")

function changeColor(){
    let randomR = Math.random() * 255
    let randomG = Math.random() * 255
    let randomB = Math.random() * 255
    $(".bigtext").css("color","rgb("+randomR+","+randomG+","+randomB+")")
}

$(".bigtext").hover(changeColor, changeColor)