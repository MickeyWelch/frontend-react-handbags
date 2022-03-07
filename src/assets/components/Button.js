import React from "react";

function Button({value, disableButton}){
    return(
        <button
            disabled={disableButton}
            onClick={() => {
                console.log(value)
            }}
        >{value}</button>
    );
}

export default Button;