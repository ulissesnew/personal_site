import React from "react";


const CategoryLabels = ({arr, state}) => {
    return(
        arr.map((x, index) => {
            // console.log(x.toLowerCase().includes(state));
            const checkState = x.toLowerCase().includes(state);
        
            return (<p 
                        key={index}
                        style={
                            {
                                backgroundColor: checkState ? "var(--Orange)" : "var(--White)",
                                borderRadius: "5px",
                                margin:"5px",
                                width:"90px",
                                textAlign:"left",
                                border:checkState ? "5px solid var(--Orange)": null,
                                color: checkState ? "var(--White)" : "var(--DarkGray)"
                            }
                        }
                        >
                        {x}
                    </p>)
        })
    )
};


export default CategoryLabels;