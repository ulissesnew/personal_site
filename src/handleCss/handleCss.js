
export const sizeImage = (size) => {
    if(size === "s"){
        return "small"
    }else if(size === "m"){
        return "medium"
    } else if(size === "l"){
        return "large"
    } else {
        return null
    }
};

export const borderRadius = (input) => {
    return input===true ? "radius" : null 
};


export const joinClassName = (one, two, three, four, five) => {
    return [one, two].join(" ");
};
