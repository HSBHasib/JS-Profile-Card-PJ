let main = document.querySelector("#main-container");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");


// Create Card Elem 
let cardContent = document.createElement("div");
let card = document.createElement("div");
let imgDiv = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
let p = document.createElement("p");


cardContent.classList.add("card-container");
card.classList.add("card");
imgDiv.classList.add("img-div");




form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    img.setAttribute("src", evt.target[0].value);
    h3.textContent = evt.target[1].value;
    h4.textContent = evt.target[2].value;
    p.textContent = evt.target[3].value;
    
    document.querySelector(".allContent").append(cardContent);
    cardContent.append(card);
    card.append(imgDiv, h3, h4, p);
    imgDiv.append(img);

    form.reset();
});



