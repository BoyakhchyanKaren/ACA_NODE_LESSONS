
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

