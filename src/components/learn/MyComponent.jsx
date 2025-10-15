// component = HTML + css + js
//fragment <> </>

import './style.css';
const MyComponent = () => {
    return (
        <>
            <div>eric & hoidanit</div>
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