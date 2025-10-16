// この書き方は初心者にはまだ少しい難しいと思って、学び始めたばかりなので、まずはpropsが何なのかをしっかり理解する必要があります。
// const TodoData = ({ name,age,data }) => {
const TodoData = (props) => {
    //props is a object
    // object destructing
    const { name, age, data } = props;
    console.log(">>>> chekc props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    )
}
export default TodoData;