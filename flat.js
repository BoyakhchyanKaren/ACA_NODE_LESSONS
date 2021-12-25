const arr = [1,2,3,[2,5,[8],50,[25,[70],],4],[8]];

Array.prototype.myFlat = function(depth = 1) {
    const newarr = [];
    const removeBrackets = (arr, dp) => {
        for(let i=0; i<arr.length; i++) {
            if(Array.isArray(arr[i]) && dp){
                removeBrackets(arr[i], dp - 1)
            }else{
                newarr.push(arr[i]);
            }
        }
    };
    removeBrackets(this, depth);
    return newarr;
};
