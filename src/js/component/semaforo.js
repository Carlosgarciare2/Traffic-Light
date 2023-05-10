import React, { useState } from "react";

const Semaforo = () => {

    const [selectedColor, setSelectedColor ] = useState ("red");
    return (
        <div className="container bg-image">
            <div className="base bg-black mx-auto">
                    <div className="row">
                        <div onClick={() => selectedColor ("red")} className={"light red" + ((selectedColor === "red") ? "glow" : "" )}></div>
                    </div>
                    <div className="row">
                        <div onClick={() => selectedColor ("yellow")} className={"light yellow" + ((selectedColor === "yellow") ? "glow" : "" )}></div>
                    </div>
                    <div className="row">
                        <div onClick={() => selectedColor ("green")} className={"light green" + ((selectedColor === "red") ? "glow" : "" )}></div>
                    </div>
            </div>
        </div>
    );
};

export default Semaforo;