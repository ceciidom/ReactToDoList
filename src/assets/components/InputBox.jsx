import PropTypes from "prop-types";
import { useState } from "react";
import "./InputBox.css";

function InputBox(props) {
    const [inputText, setInputText] = useState("");

    const handleChange = event => {
        const newValue = event.target.value;
        setInputText(newValue)
    }

    return (
        <div className="inputBox">
            <input onChange={handleChange} type="text" value={inputText}/>
            <button onClick={() => {
                props.click(inputText);
                setInputText("")}}>
                <span>Add</span>
            </button>
        </div>
    )

}

InputBox.propTypes = {
    click: PropTypes.func.isRequired,
};

export default InputBox;
