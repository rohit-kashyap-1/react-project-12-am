
import './Form.css';
let name = "Rohit"

function Form(){
    return (
        <>
        <label>{name}</label>
        <input type="text" placeholder="Enter your name" />
        </>
    )
}

export  {name, Form};

//component