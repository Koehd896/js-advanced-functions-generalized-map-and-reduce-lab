function map(array, fn) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray;
}

function reduce(array, fn, start) {
    let startBoolean = false
    if(start){startBoolean = true}
    let value;
    for(let i = 0; i < array.length; i ++) {
        if(startBoolean) {
            value = fn(start, array[i])
            startBoolean = false;
        } else if(i === 0) {
            value = fn(array[i], array[i + 1])
            i = 1;
        } else {
            value = fn(value, array[i]);
        }
 
    };
    return value;
}
