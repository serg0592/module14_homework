let a = {
    num: 123,
    str: 'abc'
};

let str1 = prompt('string');

function f1(str, obj) {
    let result = false;
    for (let key in obj) {
        if (key === str) { 
            result = true; 
        };
    };
    return result;
}

console.log(f1(str1, a));