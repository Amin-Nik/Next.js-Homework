"use client"

import { postOrPatchData } from "@/utils/actions";
import { useState } from "react";

function Form({ name, btnText, url, method, id = Date.now() }) {
    const [inputValue, setInputValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        postOrPatchData(url, { id, [name]: inputValue }, method);
        setInputValue("");
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: 30 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <label htmlFor={name}>{name}</label>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name={name} id={name} />
            </div>
            <button style={{ height: 40.4, borderRadius: 10 }}>{btnText}</button>
        </form>
    );
}

export default Form;