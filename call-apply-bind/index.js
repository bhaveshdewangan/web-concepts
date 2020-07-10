const callMeHoney = function(callerPlace, calleePlace) {
    console.log("caller ", this.caller, "from ", callerPlace, " called his lover ",
      this.callee, "staying in ", calleePlace, " in US")
}

telephone = {
    caller: 'John',
    callee: 'Anne'
}
callMeHoney.apply(telephone, ['boston', 'raleigh']);
callMeHoney.call(telephone, 'boston', 'raleigh');
const callMeFn = callMeHoney.bind(telephone,'boston', 'raleigh');
callMeFn();

// writing bind polyfills
Function.prototype.myBind = function(...args) { //telephone, callerPlace, calleePlace can use direct instead of args
    const callingFunctionContext = this;
    return function (...args2) {
        callingFunctionContext.apply(args[0], args2)
    }  
   
}  

const callMeMyBindFn = callMeHoney.myBind(telephone)
callMeMyBindFn('boston', 'raleigh');





  