import { useState } from "react";

const TextFiled = () => {
    const [text, setText]  = useState("")
    const resert = () =>{
        setText("");
    }
    return (
        <div>
            <input type="text" name="" id="" value={text} onChange={(e)=>{
                let t = e.target.value;
                console.log(e);
                setText(t);
            }} />
            <p>Noi dung cua o input:{text}</p>
            <button onClick={resert}>Dat lai</button>
        </div>
    )
}

export  default TextFiled   /// ve nc

// default: component function