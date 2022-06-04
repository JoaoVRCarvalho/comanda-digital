import { React, useState } from "react";

export default function DateInput(props) {

    const [date, setDate] = useState('');

    function keyPressFunc(e) {
        if(e.which === 8) {
            let val = e.target.value;
            console.log(val);
            if(val.length === 3 || val.length === 6) {
                val = val.slice(0, val.length-1);
                console.log(val);
                setDate(val);
            }
        }
    }

    function handleChange(e) {
        let val = e.target.value
        setDate(val)
        if (val.length === 2) {
            val += '/';
        }
        else if (val.length === 5) {
            val += '/';
        }
        setDate(val);
    }

    return (
        <input 
            type="text"
            value={date}
            placeholder={props.placheholder}
            onChange={handleChange} 
            onKeyPress={keyPressFunc}
            />
    )
}