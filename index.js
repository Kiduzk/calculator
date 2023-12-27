let displayValue = "0";

function updateDisplayValue(){
    $(".answer").text(displayValue);
}

// simluation of button click aimation for the button div
$(".btn").click(function() {
    displayValue += this.innerHTML; 
    updateDisplayValue();   
    this.classList.add("clicked");
    setTimeout(() => {
        this.classList.remove("clicked")
    }, 200);
})

updateDisplayValue();