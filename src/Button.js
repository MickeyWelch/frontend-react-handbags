import React from "react";

function Button({value, disableButton}){
    return(
        <button
            disabled={disableButton}
            onClick={() => {
                console.log("testen kliks")
            }}
        >{value}</button>
    );
}

export default Button;