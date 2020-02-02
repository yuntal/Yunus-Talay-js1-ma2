// 1) Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. The function should console log your name.

const myFunctionExpression = function () {
    console.log("Yunus");
};


myFunctionExpression();

// 2) Select the input in the HTML below by its class. Add a click event listener. The callback function passed to the event listener should log the sentence I was clicked.
You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.
<input type="button" class="btn" value="Click me">


const btn = document.querySelector(".btn");

function callMyButtonClick() {
    console.log("i was clicked");
};

btn.addEventListener("click", callMyButtonClick);


// 3) Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed to the event listener should log the value of the key that was pressed.
<input class="input" id="firstName"></div>


const textInput = document.querySelector("#firstName");
function callAfterKeyDownIsReleased() {
    console.log("key down was pressed");
};
textInput.addEventListener("keydown", callAfterKeyDownIsReleased);



// 4)  Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button.
<button class="btn" data-animal="dog">Hover over me</button>

const button = document.querySelector(".btn");
function myNewHover() {
    console.log("The cursor moved over the button");
};

document.addEventListener("mouseover", myNewHover);
button.classList.add("hover");
console.log(button);


// 5)  Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button.
<button class="btn" data-animal="dog">Hover over me</button>

const button = document.querySelector(".btn");
function myNewHover() {
    console.log("The cursor moved over the button");
};

document.addEventListener("mouseout", myNewHover);
button.classList.remove("hover");
console.log(button);




// 6)  Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.
The callback function should log the value of the data attribute on each element when the cursor moves over it.

const animals = document.querySelector("ul");
function myMouseOver() {

};

document.addEventListener("mouseover", myMouseOver);
console.log(animals);




// 7) Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the switch.
const animal = "cow";

if(animal === "cat") {
    console.log("Meow");
}
else if(animal === "cow") {
    console.log("Moo");
}
else if(animal === "bird") {
    console.log("Tweet");
}
else {
    console.log("Harrumph");
}

const animal = "cow";

let arrayToLoopThrough = [];

switch(animal) {
 case "cat":
 break;

 case "cow":
 break;
 
 case "bird":
 break;

 default:
        arrayToLoopThrough = ["harrumph"];
}



// 8) Convert the for loop code below to a forEach loop.

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});



// 9) Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.

function logTime() {
    // first log the current date/time
    console.log(new Date());

    if(counter === 5) {
        clearInterval(intervalId);
    }
    console.log("hello");

 
    counter++;

}

let counter = 0;


const intervalId = setInterval(logTime, 500);



