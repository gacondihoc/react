import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props
    // addNewTodo("eric")

    //ueState hook
    // const valueInput = "eric";

    const [valueInput, setValueInput] = useState("")
    const [num, setNum] = useState(0)


    const handleClick = () => {
        // alert("click me")
        setNum(num + 1)
        console.log(num)
        console.log(valueInput)
    }
    const handleOnChange = (name) => {
        setValueInput(name)

    }
    const reNum = () => {
        setNum(0)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <button style={{ cursor: "pointer" }}
                onClick={reNum}
            >return Num</button>
            <div>My text input = {valueInput} </div>
            <div>{num} </div>
        </div>
    )
}
export default TodoNew;