
//explaining how array slice works...!
/*
(method) Array<number | (number | (number | number[])[])[]>.slice(start?: number, end?: number): (number | (number | (number | number[])[])[])[]
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

*/


Array.prototype.mySlice = function (index1, index2) {
    try {
        const newarr = [];
        if ((index1 < 0 && index2 < 0) && index1 > index2) {
            return newarr;
        };
        if (index1 < 0 && index2 < 0) {
            index1 += this.length;
            index2 += this.length;
            for (let i = 0; i < this.length; i++) {
                if (i >= index1 && i < index2) {
                    newarr.push(this[i])
                };
            };
            return newarr;
        }
        if (index2 < 0) {
            index2 += this.length;
        };
        if(arguments.length === 1 && index1 < 0){
            index1 +=this.length;
            index2  = this.length;
            for(let i=0; i<this.length; i++) {
                if(i >= index1 && i <= index2){
                    newarr.push(this[i]);
                }
            };
            return newarr;
        }else if(arguments.length === 1 && index1 > 0){
            index2 = this.length;
            for (let i = 0; i < this.length; i++) {
                if (i >= index1 && i <= index2) {
                    newarr.push(this[i])
                };
            };
            return newarr;
        }else if(arguments.length === 1 && !index1){
            return this;
        }

        for (let i = 0; i < this.length; i++) {
            if (i >= index1 && i < index2) {
                newarr.push(this[i])
            };
        };
        return newarr;
    } catch (e) {
        console.log("Something went wrong...!", e);
    };
};

