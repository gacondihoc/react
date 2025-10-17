import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props
    // addNewTodo("eric")

    //ueState hook
    // const valueInput = "eric";

    const [valueInput, setValueInput] = useState("eric")


    const handleClick = () => {
        // alert("click me")
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleOnChange = (name) => {
        setValueInput(name)

    }

    return (
        <div className="todo-new">
            <input
                value={valueInput}
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>My text input = {valueInput} </div>
        </div>
    )
}
export default TodoNew;