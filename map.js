
Array.prototype.myMap = function(callback) {
    const newarr = [];
    for(let i=0; i<this.length; i++) {
        newarr.push(callback(this[i], i, this));
    };
    return newarr;
};

