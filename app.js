let boxOfColors = 6
let colors = randomColors(boxOfColors);
let boxColor = document.querySelectorAll('.boxColor');
let colorNumber = document.getElementById('colorNumber');
let messageDisplay = document.querySelector('#message');
let colorPicker = randomNumber();
let reset = document.querySelector('.reset')
let mainText = document.querySelector('h1');
let easy = document.querySelector('.easy');
let hard = document.querySelector('.hard');

//display the color numbers
colorNumber.textContent = colorPicker;

reset.addEventListener('click', resetEverything);
            
function resetEverything(){
     //generate new colors
     colors = randomColors(boxOfColors);
     //pick new random colors from arrays
     colorPicker = randomNumber();
     //change the color number on display
     colorNumber.textContent = colorPicker;
     //change the colors in the display
     for(let i = 0; i < boxColor.length; i++){
         if(boxColor[i]){
            boxColor[i].style.display = 'block';
            boxColor[i].style.backgroundColor = colors[i];
         }else{
            boxColor[i].style.display = 'none' ;
         }
     }
     messageDisplay.textContent = '';
     this.textContent = 'New Color'
     mainText.style.backgroundColor = '#000000'
}

for(let i = 0; i < boxColor.length; i++){
    //add the colors to the circles
    boxColor[i].style.backgroundColor = colors[i];

    //check what color you have clicked on
    boxColor[i].addEventListener('click', function(){
        let clickedColor = this.style.backgroundColor;

        if(colorPicker === clickedColor){
            messageDisplay.textContent = 'Corret'
            changeColor(clickedColor);
            mainText.style.backgroundColor = clickedColor;
            reset.textContent = 'Play Again?'
        } else{
            this.style.backgroundColor = '#222222';
            messageDisplay.textContent = 'Wrong';
        }
    });
}

function changeColor(color){
    //go through all the circles and make it the same color
    for(let i = 0; i < boxColor.length; i++){
        boxColor[i].style.backgroundColor = color;
    }
}

function randomNumber(){
   let num =  Math.floor(Math.random() * colors.length);
   return colors[num]
}

function randomColors(num){
    let arr = [];
    //push the random colors into the empty arr
    for(let i = 0; i < num; i++){
        //make the random the random colors
        arr.push(randomColorNumber());
    }
    //it will return the arr to the colors
    return arr;
}

//this will generate random number for the color
function randomColorNumber(){
    // this is red color
    let red = Math.floor(Math.random() * 255) + 1;
    //this is green color
    let green = Math.floor(Math.random() * 255) + 1;
    //this is blue color
    let blue = Math.floor(Math.random() * 255) + 1;
    //it will return the RGB colors
    return `rgb(${red}, ${green}, ${blue})`;
}

easy.addEventListener('click', function(){
    hard.classList.remove('picked');
    easy.classList.add('picked');
    boxOfColors = 3;
    colors = randomColors(boxOfColors);
    colorPicker = randomNumber();
    colorNumber.textContent = colorPicker;
    for(let i = 0; i < boxColor.length; i++){
        if(colors[i]){
            boxColor[i].style.backgroundColor = colors[i];
        }else{
            boxColor[i].style.display = 'none';
        }
    }
    mainText.style.backgroundColor = '#000000'
});

hard.addEventListener('click', function(){
    hard.classList.add('picked');
    easy.classList.remove('picked');
    boxOfColors = 6;
    colors = randomColors(boxOfColors);
    colorPicker = randomNumber();
    colorNumber.textContent = colorPicker;
    for(let i = 0; i < boxColor.length; i++){
        boxColor[i].style.backgroundColor = colors[i];
        boxColor[i].style.display = 'block';
    }
    mainText.style.backgroundColor = '#000000'
})