/* simple example */
function closures() {
    const num = 26;
    inner();
    function inner() {
        console.log("NUMBER", num);
    }
}
closures();

/*
    Try to understand a closures also from a another beautiful way.
    Now here we are returning closure inner function and let see how returned 
    function remembers his lexical scope, and that's call a closures.
*/
function remember() {
    var rememberMe = "Ofcourse! i remember you :)";
    function closure() {
        console.log("Do you remember me, ", rememberMe);
    }
    rememberMe = "i won't forget you only"
    return closure;
}
const fn = remember();
fn();

/*
    Let me try to give you one more example where we are going deep inside the closures 
    where we have a multiple layer nested function, lets see if closure property still exist or not. 
    PS: inner most function forms a closures with his all parent/outer most functions
*/
function levelThree() {
    var parkingForStaff = true;
    function levelTwo() {
        var parkingForCustomer = true;
        parkingForStaff = false;
        function levelOne() {
            console.log("Staff Parking: ", parkingForStaff, "\n", "Customer Parking: ", parkingForCustomer)
        }
        levelOne();
    }
    levelTwo();
}
levelThree();

/*
    E   X  E  R  C  I  S  E
    most frquently asked question in inteview
    Problem statemen: Print the number 1,2,3,4 after each second
*/
function solutionFirst() {
    for(let i=1; i<=4; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000*i)
    }
}
solutionFirst();
/*
    REASON:
    solutionFirst will be able to give a desired solution because we used 'let' and 'let' is
    blocked scope. so when everytime this loop will run this "i" is new variable all together 
    and due to the functio insdie settimeout form a closure it remembers the varible "i" each
    time it has been created.
*/

function solutionSecond() {
    for(var i=1; i<=4; i++) {
        function closure(i) {
            setTimeout(() => {
                console.log(i);
            }, 1000*i)
        }
        closure(i)
    }
}
solutionSecond();
/*
    REASON:
    solutionSecond will be able to give a desired solution even after using a "var" instead of "let"
    because everytime loop run we provide a new value to the function "closure" and the statment
    inside the function remember the vlue provided from outside
*/

