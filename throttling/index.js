function doPerformExpensiveTask() {
    console.log('performing...')
}


const throttling = function (fn, delay) {
    let allowToCall = true;
    const context = this;
    const argv = [];
    console.log('allowToCall',allowToCall);

    return function() {
        if(allowToCall){
            allowToCall = false;
            fn.apply(context, argv);
            setTimeout(() => {
                allowToCall = true;
            }, delay)
        }
    }
}

const methodToBeUsed = throttling(doPerformExpensiveTask, 1000)
