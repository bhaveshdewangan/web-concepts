// a function to call API to get the search result for this
const getData = function (searchText) {
    console.log('fetching data...', searchText)
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        const searchText = event.target.value;
        const context = this;
        const argv = [searchText];
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, argv)
        }, delay)
    }
}

const methodToBeUsed = debounce(getData,500);

