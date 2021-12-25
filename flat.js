//explaining how array flat function works...!
/*
flat(depth?: 1): (number | (number | number[])[])[]
The maximum recursion depth
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/

const arr = [1, 2, 3, [2, 5, [8], 50, [25, [70]], 4], [8]];

Array.prototype.myFlat = function (depth = 1) {
    try {
        const newarr = [];
        const removeBrackets = (arr, dp) => {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i]) && dp) {
                    removeBrackets(arr[i], dp - 1)
                } else {
                    newarr.push(arr[i]);
                }
            }
        };
        removeBrackets(this, depth);
        return newarr;
    } catch (e) {
        console.log("Something went wrong...!", e);
    }
};
