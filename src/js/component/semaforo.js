import React from "react";

const Semaforo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="palo bg-black mx-auto">
                    <p></p>
                </div>
            </div>
            <div className="row">
                <div className="base bg-black mx-auto">
                    <div className="row mx-auto">
                        <button className="rojo bg-danger rounded-circle border-0">.</button>
                    </div>
                    <div className="row">
                        <button className="amarillo bg-warning rounded-circle border-0">.</button>
                    </div>
                    <div className="row">
                        <button className="verde bg-success rounded-circle border-0">.</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Semaforo