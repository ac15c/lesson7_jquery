/*  Program Name: Recipe Display Application
    Author: Adia Celestine
    Date:   4/6/16
    Filename: myrecipe.js
*/

//attach event listener to h3 elements to invoke display function when clicked 
$ ("h3").click(display);

//displays and animates the next element after the current target 
function display (event) {
    $ (event.currentTarget).next().animate( {height: 'toggle'}, "fast");
}// end of display


