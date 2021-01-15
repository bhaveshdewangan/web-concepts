/*
    FUNCTION STATEMENT OR FUNCTION DECLARATION:
    A simple function initialization with 'function'  without being assigned to some varible is 
    known as a function statement and function declaration. 
*/

function statementOrDeclaration() {
    console.log('This is function statement or function declaration');
}
statementOrDeclaration();

/*
    FUNCTION EXPRESSION
    A simple function which assign to a varibale like how normal statment or rxpression assign 
    to varible, those function known as a function expression.
*/

var expression = function () {
    console.log('This is function expression');
}
expression();

/*
    FUNCTION STATEMENT OR FUNCTION DECLARATION VS FUNCTION EXPRESSION:
    Only differnec between them is the way hoisting works for them..
    in above example if you call both function before they define you will get a 
    error for funtion expression wheather function statment or declaration work fine.
*/


/*
    ANONYMOUS FUNTION
    When a function used as a vlaue is called as anonymous function.
    You can't call a function without its name.
    ex. javascript array function using function as a value is the
    example of anonymous function
*/
    // function () {
    //     console.log("Anonymous function")
    // }


/*
    NAMED FUNTION EXPRESSION
    It is similar to the function expression but here we just need to assign the name the function which
    going to be assign to the value.
*/

var namedFunExpression = function xyz() {
    console.log(xyz);
}
namedFunExpression();
xyz();


/*
    FIRST CLASS FUNTION OR FIRST CLASS CITIZEN
    Ability of a function to be used as a value, can be passed as argument to
    another function, can be return out from another function is know as
    first calss function. 
*/


/*
    GARBAGE COLLECTOR OR REMOVE EVENT LISTNERS
    Why do we need to remove event listners
    It is heavy, it takes memory because it forms a closures 
    with its outer scope or function. Also, we can't free this memory
    because someone can perform the event for which we created a listeners

    When i remove the listeners all the varibale is held by the listeners callback function
    are garbage collected.
    
*/