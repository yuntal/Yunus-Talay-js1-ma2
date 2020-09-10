// Question 1. 

Add a click event to the first button in the HTML file that changes the body background colour to green.

// const button = document.getElementById ('bg');

button.onclick= function (){
    console.log(event.target);

    event.target.style.background = "green";

};



// Question 2. 

Add a click event to the second button that toggles the class extra (adds it on the first click, removes it on the next) on the div with the class of togglee.

// const button = document.querySelector (".togglee");

button.onclick= function (){
    console.log(event.target);
    
    event.target.classList.toggle("extra");
    
};




// Question 3.

Add a change event to the select element that adds an amount of paragraphs equal to the selected value to the div with a class of paragraphs-container. If you select 3, 3 paragraphs should be displayed. Each paragraph should have a class called content.


// const numberList = document.querySelector ("select");
const pharagraphContainer = document.querySelector (".paragraphs-container");

numberList.onchange = function() {
console.log(event.target.value);

const valueSelect = this.value;

for (let i = 1; i <=valueSelect; i ++){
pharagraphContainer.innerHTML +='<div class = "content"></div>'
}
};




// Question 4. 


Write code that displays the character count of the text input every time it changes. There is HTML you can use to display this value.

// const words = document.querySelector(".input");
const countCharacters = document.querySelector (".char-count");

words.onkeyup = function (){
    console.log(event.target.value.length)

    const length = event.target.value.length;

    countCharacters.innerHTML = length;

};




// Question 5.


Write code that adds the class highlight to the body when the page has scrolled at least 35px, and removes it when scrolled less than that.

// const body = document.querySelector ("body");

function scrollHandler (){
    console.log (window.scrollY);

    const scrollerY = window.scrollY;

    if(scrollerY > 35){
        document.body.classList.add("higlight")
    }
    else{
        document.body.classList.remove("higlight")
    }
}

window.onscroll = scrollHandler;



