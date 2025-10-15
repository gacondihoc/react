// component = HTML + css + js
//fragment <> </>

import './style.css';
const MyComponent = () => {
    const hoidanit = "eric jsx data"; //string
    const age = 25;
    const boo = true;
    const unde = undefined;
    const nu = null;
    const arr = [1, 2, 3]
    const ob = {
        name: "hoidanit",
        age: 25
    }
    return (
        <>
            <div>{hoidanit} & hoidanit & {age} age & {boo}& {unde}& {nu} &{JSON.stringify(arr)}&{JSON.stringify(ob)}</div>
            <div>{console.log("ERIC")}</div>

            <div className="child"
                style={
                    {
                        borderRadius: "10px",
                        background: "black"
                    }
                }>child</div>
        </>
    );
}

export default MyComponent;