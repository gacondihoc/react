// この書き方は初心者にはまだ少しい難しいと思って、学び始めたばかりなので、まずはpropsが何なのかをしっかり理解する必要があります。
// const TodoData = ({ name,age,data }) => {
const TodoData = (props) => {
    //props is a object
    // object destructing
    const { todoList, deleteData } = props;

    const handleClick = (id) => {
        deleteData(id)
    }

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }} onClick={() => handleClick(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div >
    )
}
export default TodoData;