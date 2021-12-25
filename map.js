//explaining how array map function works...!
/*

(method) Array<number | (number | (number | number[])[])[]>.map<any>(callbackfn: (value: number | (number | (number | number[])[])[], index: number, array: (number | (number | (number | number[])[])[])[]) => any, thisArg?: any): any[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
Array.prototype.myMap = function (callback) {
    try {
        const newarr = [];
        for (let i = 0; i < this.length; i++) {
            newarr.push(callback(this[i], i, this));
        };
        return newarr;
    } catch (e) {
        console.log("Something went wrong...!", e);
    }
};

