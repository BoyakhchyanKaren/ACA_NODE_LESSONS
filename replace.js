function reverseObject(item) {
    const new_item = JSON.stringify(item);
    const new_obj = JSON.parse(new_item);
    let replace = (list) => {
        for (let key in list) {

            if (typeof list[key] === "object") {
    
                replace(list[key])
    
            } else {
    
                list[list[key]] = key
    
                delete list[key]
    
            }
    
        }
        return list;
    };

    return replace(new_obj);
}
