function randIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max+1);
    return Math.floor(Math.random() * (max - min) + min);
}

function buttonPressed() {
    document.getElementById("number").innerHTML = randIntRange(1, 100);
    console.log("Generated random number.");
    //window.alert("Generated random number.");
}