
// simluation of button click aimation for the button div
$(".btn").click(function() {
    this.classList.add("clicked");
    setTimeout(() => {
        this.classList.remove("clicked")
    }, 200);
})