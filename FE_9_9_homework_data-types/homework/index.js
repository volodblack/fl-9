// task 1
function findType(element) {
    return typeof element;
}

//tsk 2
function forEach(arr, fun) {
    for(let i = 0; i < arr.length; i++) {
        fun(arr[i]);
    }
}

//task 3 
function map(arr, fun) {
    let transformedArr = [];
    forEach(arr, function(el) {
        transformedArr.push(fun(el));
    });
    return transformedArr;
}

//task 4
function filter(arr, fun) {
    let filterArr = [];
    forEach(arr, function(el) {
        if (fun(el)) {
            filterArr.push(el);
        }
    });
    return filterArr;
}

// task 5
function getAdultAppleLovers(data) {
    return map(
        filter(data, function(el) { 
            return el.age >= 18 && el.favoriteFruit === 'apple';
        }), 
        function(el) {
            return el.name;
        }
    );
}

// task 6
function keys(obj) {
    let arr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}

// task 7
function values(obj) {
    let arr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
        }
    }
    return arr;
}

// task 8
function showFormattedDate(dt) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `It is ${dt.getDate()} of ${months[dt.getMonth()]}, ${dt.getFullYear()}`;
}