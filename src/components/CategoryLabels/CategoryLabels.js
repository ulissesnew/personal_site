import React from "react";


const CategoryLabels = ({arr, state}) => {
    return(
        arr.map((x) => {
            // console.log(x.toLowerCase().includes(state));
            const checkState = x.toLowerCase().includes(state);
        
            return (<p 
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
                        key={arr.id}>
                        {x}
                    </p>)
        })
    )
};


export default CategoryLabels;