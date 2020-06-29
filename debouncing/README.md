# Web Concepts #1 Debouncing
This small project contains a simple HTML and Javascript file.

### What is Debouncing
Debounce function limits the rate at which a function can fire. 
A quick example:  You have a resize listener on the window which does some element dimension calculations and (possibly)  repositions a few elements.  That isn't a heavy task in itself but being repeatedly fired after numerous resizes will really slow your site down.
Another example: In any web site where the search bar is there, on every character enters its going to give us a suggestion based the our text. So basically an API calls being made (in most cases). so if every key up if we are going to call API then the result will not as expected and moreover it is not good user and development experiance.So here we need to introduce the debounce concept to make user experiance flawless.

### Use Cases
- Debouncing a resize event handler
- Debouncing a scroll event handler
- Debouncing a save function in an autosave feature



@see: https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
@see: https://davidwalsh.name/javascript-debounce-function
@see: https://www.youtube.com/watch?v=Zo-6_qx8uxg


