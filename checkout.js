let form = document.getElementById("form");
let popup = document.getElementById("popup");
let close = document.getElementById("close");
let total = localStorage.getItem("total");
let total_amount = document.getElementById("total_price");

total_amount.innerHTML = "Total amount : " + total;

form.addEventListener("submit", function(e){
    e.preventDefault();
    popup.classList.add("popup");
});

close.addEventListener("click", function(){
    popup.classList.remove("popup");
    window.location.href = "../home.html"; 
});