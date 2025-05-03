import React, { useState } from 'react'

export default function (props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.alerto("Text changed to UpperCase", "Success");
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.alerto("Text changed to LowerCase", "Success");
    }
    const handleclearclick = () => {
        setText("");
        props.alerto("Text cleared", "Success");
    }
    const onchangehandler = (event) => {
        console.log(" onchange");
        setText(event.target.value);
    }
    const handlecopy = () => {
        var t = document.getElementById("myBox")
        t.select();
        navigator.clipboard.writeText(t.value);
        props.alerto("Text copied", "Success");
    }
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+ /);
        setText(newtext.join(" "));
        props.alerto("Unwanted spaces removed", "Success");
    }
    const textlength = (text0) => {
        let cnt = 0;
        for (let i of text0) {
            if (i === ' ') continue;
            else cnt++;
        }
        return cnt;
    }
    const wordlength = (s) => {
        let trimmed = s.trim();

        // If the string is empty after trimming, there are 0 words
        if (trimmed === "") {
            return 0;
        }

        // Otherwise, split by one or more whitespace and count
        let words = trimmed.split(/\s+/);
        return words.length;
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={onchangehandler} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove extra spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{wordlength(text)} Words and {textlength(text)} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text in the above box to preview'}</p>
            </div>




        </>
    )
}
