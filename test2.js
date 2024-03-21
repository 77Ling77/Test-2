function isEmptyObject(obj) {
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

const obj1 = {};
const obj2 = {key: 'value'};

console.log(isEmptyObject(obj1)); // true
console.log(isEmptyObject(obj2)); // false
