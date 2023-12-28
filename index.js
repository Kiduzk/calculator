let displayValue = "0";

function updateDisplayValue(){
    $(".answer").text(displayValue);
}

// simluation of button click aimation for the button div
// Update: just found out there is eval() funcion to compute an evaluation which I will be using,
//         this heavily reduced my underestimation of how long this project would take me

$(".equals").click(function() {
    displayValue = eval(displayValue);
    updateDisplayValue()
})

$(".btn").click(function() {
    if (this.innerHTML === "=") return
    if (this.innerHTML === "x") displayValue += "*"
    else displayValue += this.innerHTML; 
    updateDisplayValue();

    // button click visual effect
    this.classList.add("clicked");
    setTimeout(() => {
        this.classList.remove("clicked")
    }, 200);
})


updateDisplayValue();