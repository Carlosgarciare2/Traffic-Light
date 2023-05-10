import React, { useState } from "react";

const Semaforo = () => {

    const [selectedColor, setSelectedColor ] = useState ("red");
    return (
        <div className="container bg-image">
            <div className="base bg-black mx-auto">
                    <div className="row">
                        <div 
                        onClick={() => setSelectedColor ("red")} 
                        className={"light red" + (selectedColor === "red" ? " glow" : "" )
                        }></div>
                    </div>
                    <div className="row">
                        <div 
                        onClick={() => setSelectedColor ("yellow")} 
                        className={"light yellow" + (selectedColor === "yellow" ? " glow" : "" )
                        }></div>
                    </div>
                    <div className="row">
                        <div 
                        onClick={() => setSelectedColor ("green")} 
                        className={"light green" + (selectedColor === "green" ? " glow" : "" )
                        }></div>
                    </div>
            </div>
        </div>
    );
};

export default Semaforo;