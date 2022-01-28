import React from "react";

const Toggel = () => {
    return (
        <div className="toggel">
            <div>
            <img className=" logo" src="https://media.istockphoto.com/photos/cake-picture-id172185640?b=1&k=20&m=172185640&s=170667a&w=0&h=qoHpgGIGXKwSfOGH7QPBtJOycep5E0XR8EhDqbqJnQU="  alt ="CAKE"/>
            <div className="cake">CAKE</div>
            </div>
            <div>
            <label className="switch"> 
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p className="diffe">USD</p>
            </div>
        </div>
    )
}
export default Toggel;