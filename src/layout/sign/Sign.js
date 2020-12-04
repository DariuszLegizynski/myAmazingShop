import React from "react";
import { Link } from "react-router-dom";

const Sign = () => {
    return (
        <div>
            <p>Welcome to the login page</p>
            <Link to={"/"}>
                <p>BACK</p>
            </Link>
        </div>
    )
}

export default Sign;