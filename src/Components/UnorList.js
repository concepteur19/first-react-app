import React from "react";
import * as calculator from "./calculator";

function UnorList() {
    return (
        <div>
            <ul>
                <li> {calculator.add(1,2)} </li>
                <li> {calculator.multiply(2,3)} </li>
                <li> {calculator.substract(7,2)} </li>
                <li> {calculator.divide(5,2)} </li>
            </ul>
        </div>
    )
}

export default UnorList;