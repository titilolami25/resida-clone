import React from "react";
import "./buttonStyle.css";

const Button = ({ style, btnName, outline, rightIcon, leftIcon }) => {
    return (
        <button style={style} className={`${outline ? "outline" : "btn"}`}>
            {leftIcon && <span className="left_icon">{leftIcon}</span>}
            {btnName}
            {rightIcon && <span className="right_icon">{rightIcon}</span>}
        </button>
    );
};

export default Button;











// import React from "react";
// import "./buttonStyle.css";

// const Button = ({ btnName, outline}) =>{
//     return <div className ={'${outline ? "outline" : "btn"}'}>{btnName}</div>;
// };
        
    
// export default Button;