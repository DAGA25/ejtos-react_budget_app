
import React,{ useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () =>
{
    const {currency,dispatch} = useContext(AppContext);
    const {displayText,setDisplayText} = useState('');
    const handleCurrencyChange = (event) =>
    {
        dispatch({
            type:"CHG_CURRENCY",
            payload:event.target.value
        })

    }

    return (
        <div className="alert alert-success">
        <label>Currency: </label>
        <select className="custom-select" id="changeCurrency" onChange={handleCurrencyChange}>
            
            <option className="currencyOption" value="$" name="dollar">$ Dollar</option>
            <option value='£' name="Pound" selected>£ Pound</option>
            <option value='€' name="Euro">€ Euro</option>
            <option value='₹' name="Ruppee">₹ Ruppee</option>
        </select>
        </div>
    );
}

export default Currency;