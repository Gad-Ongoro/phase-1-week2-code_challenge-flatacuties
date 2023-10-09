// Your code here
let addVotesButton = document.querySelector("input[type='submit']");
let votesInput = document.querySelector("input#votes");
let voteCount = document.querySelector("span#vote-count");

//Prevents a form's default submit behaviour when the submit button is clicked
function removeDef() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
    });
} 
removeDef();

//Task 1 <See a list of all animal names.>
//a function that grabs the container element and appends each flatCuty name
function eachChar(char){
    let nameP = document.querySelector("p#name");
    let charImage = document.querySelector("img#image")
    let charBar = document.querySelector("div#character-bar");
    let charName = document.createElement("div.charDiv");
    let resetBtn = document.querySelector("button#reset-btn");

    charName.innerHTML = `
        <img src="${char.image}" width="60px">
        <p> ${char.name} </p>
    `;
    charName.style.cursor = "pointer"; /*style*/

    charBar.appendChild(charName);

    charName.addEventListener("click", function(){
        nameP.innerHTML = char.name;
        charImage.src = char.image;
        voteCount.innerHTML = 0;
    });

    resetBtn.addEventListener("click", function(){
        voteCount.innerHTML = 0;
    })

    //console.log(voteCount.innerHTML);
    }


//JSON_fetcher
function jsonDataFetcher1(){
    fetch("http://localhost:3000/characters")
    .then(res => (res.json()))
    .then(function(cuty){
        cuty.forEach(eachChar);
        //console.log(cuty)
    });
}
jsonDataFetcher1();

addVotesButton.addEventListener("click", function(){
    let currentInputValue = parseInt(votesInput.value, 10);
    voteCount.innerHTML = parseInt(voteCount.innerHTML, 10) + currentInputValue;
    //console.log(currentInputValue);
});

//styles
document.querySelector('form input[type="submit"]').style.cursor = "pointer";
document.querySelector("button").style.cursor = "pointer";