Array.prototype.mySlice = function(index1, index2) {
    const newarr = [];
    for(let i=0; i<this.length; i++){
        if(i >= index1 && i<index2){
            newarr.push(this[i])
        }
    };
    return newarr;
};